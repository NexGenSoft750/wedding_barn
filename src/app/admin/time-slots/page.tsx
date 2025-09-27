'use client';

import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Modal, Form, Alert, Badge } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaClock } from 'react-icons/fa';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001/api';

interface TimeSlot {
  id: number;
  time: string;
  period: string;
  created_at: string;
}

export default function TimeSlotsPage() {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [editingSlot, setEditingSlot] = useState<TimeSlot | null>(null);
  const [formData, setFormData] = useState({ time: '', period: 'AM' });

  const availableTimes = [
    '12:00', '12:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30',
    '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30',
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30'
  ];

  useEffect(() => {
    fetchTimeSlots();
  }, []);

  const fetchTimeSlots = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/admin/time-slots`);
      setTimeSlots(response.data);
    } catch (err) {
      console.error('Error fetching time slots:', err);
      setError('Failed to load time slots');
    } finally {
      setLoading(false);
    }
  };

  const handleAddNew = () => {
    setEditingSlot(null);
    setFormData({ time: '', period: 'AM' });
    setShowModal(true);
  };

  const handleEdit = (slot: TimeSlot) => {
    setEditingSlot(slot);
    // Extract time without period (e.g., "9:00 AM" -> "9:00")
    const timeWithoutPeriod = slot.time.replace(/ (AM|PM)$/, '');
    setFormData({ time: timeWithoutPeriod, period: slot.period });
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      const timeSlotData = {
        time: `${formData.time} ${formData.period}`,
        period: formData.period
      };
      
      if (editingSlot) {
        await axios.put(`${API_BASE_URL}/admin/time-slots/${editingSlot.id}`, timeSlotData);
        setSuccess('Time slot updated successfully!');
      } else {
        await axios.post(`${API_BASE_URL}/admin/time-slots`, timeSlotData);
        setSuccess('Time slot added successfully!');
      }
      
      setShowModal(false);
      fetchTimeSlots(); // Refresh the list
    } catch (err) {
      setError('Failed to save time slot');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this time slot?')) return;

    try {
      await axios.delete(`${API_BASE_URL}/admin/time-slots/${id}`);
      setSuccess('Time slot deleted successfully!');
      fetchTimeSlots(); // Refresh the list
    } catch (err) {
      setError('Failed to delete time slot');
    }
  };

  const sortedTimeSlots = [...timeSlots].sort((a, b) => {
    const timeA = new Date(`2000-01-01 ${a.time}`);
    const timeB = new Date(`2000-01-01 ${b.time}`);
    return timeA.getTime() - timeB.getTime();
  });

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 mb-0">Time Slots</h1>
          <p className="text-muted mb-0">Manage available tour time slots</p>
        </div>
        <div className="d-flex gap-2">
          <Badge bg="info" className="fs-6">
            {timeSlots.length} active slots
          </Badge>
          <Button variant="primary" onClick={handleAddNew}>
            <FaPlus className="me-1" />
            Add Time Slot
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert variant="success" dismissible onClose={() => setSuccess('')}>
          {success}
        </Alert>
      )}

      <Card className="shadow-sm">
        <Card.Header className="bg-white border-bottom">
          <div className="d-flex align-items-center">
            <FaClock className="me-2 text-primary" />
            <h5 className="mb-0">Available Time Slots</h5>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          {timeSlots.length === 0 ? (
            <div className="text-center py-5 text-muted">
              <FaClock size={48} className="mb-3 opacity-50" />
              <p>No time slots configured yet.</p>
              <Button variant="primary" onClick={handleAddNew}>
                Add Your First Time Slot
              </Button>
            </div>
          ) : (
            <Table className="mb-0">
              <thead className="table-light">
                <tr>
                  <th>Time</th>
                  <th>Period</th>
                  <th>Created</th>
                  <th style={{ width: '120px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedTimeSlots.map((slot) => (
                  <tr key={slot.id}>
                    <td className="fw-medium">{slot.time.split(' ')[0]}</td>
                    <td>
                      <Badge bg={slot.period === 'AM' ? 'info' : 'warning'}>
                        {slot.period}
                      </Badge>
                    </td>
                    <td className="text-muted small">
                      {new Date(slot.created_at).toLocaleDateString()}
                    </td>
                    <td>
                      <div className="d-flex gap-1">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleEdit(slot)}
                        >
                          <FaEdit />
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDelete(slot.id)}
                        >
                          <FaTrash />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      {/* Add/Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingSlot ? 'Edit Time Slot' : 'Add New Time Slot'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Select
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
              >
                <option value="">Select time...</option>
                {availableTimes.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Period</Form.Label>
              <Form.Select
                value={formData.period}
                onChange={(e) => setFormData(prev => ({ ...prev, period: e.target.value }))}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </Form.Select>
            </Form.Group>

            <div className="bg-light p-3 rounded">
              <strong>Preview:</strong> {formData.time} {formData.period}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleSave}
            disabled={!formData.time}
          >
            {editingSlot ? 'Update' : 'Add'} Time Slot
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}