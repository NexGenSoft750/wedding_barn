'use client';

import React, { useState, useEffect } from 'react';
import { Table, Alert, Badge, Card, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash, FaDownload, FaFilter } from 'react-icons/fa';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001/api';

interface Booking {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  fiance_first_name: string;
  fiance_last_name: string;
  wedding_date: string;
  tour_date: string;
  tour_time: string;
  tour_type: string;
  message: string;
  created_at: string;
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    filterBookings();
  }, [bookings, filterType, searchTerm]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/admin/bookings`);
      setBookings(response.data);
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError('Failed to load bookings');
    } finally {
      setLoading(false);
    }
  };

  const filterBookings = () => {
    let filtered = [...bookings];

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered.filter(booking => booking.tour_type === filterType);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(booking => 
        booking.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.fiance_first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.fiance_last_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBookings(filtered);
  };

  const handleViewBooking = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const exportToCSV = () => {
    const headers = ['ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Fiance First', 'Fiance Last', 'Wedding Date', 'Tour Date', 'Tour Time', 'Tour Type', 'Message', 'Created At'];
    const csvContent = [
      headers.join(','),
      ...filteredBookings.map(booking => [
        booking.id,
        booking.first_name,
        booking.last_name,
        booking.email,
        booking.phone,
        booking.fiance_first_name,
        booking.fiance_last_name,
        booking.wedding_date,
        booking.tour_date,
        booking.tour_time,
        booking.tour_type,
        `"${booking.message || ''}"`,
        booking.created_at
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bookings-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

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
          <h1 className="h3 mb-0">Tour Bookings</h1>
          <p className="text-muted mb-0">Manage all tour bookings and customer information</p>
        </div>
        <div className="d-flex gap-2">
          <Button variant="outline-primary" onClick={exportToCSV}>
            <FaDownload className="me-1" />
            Export CSV
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="danger" className="mb-4">
          {error}
        </Alert>
      )}

      {/* Filters */}
      <Card className="mb-4">
        <Card.Body>
          <Row className="g-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Tour Type</Form.Label>
                <Form.Select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="in_person">In-Person</option>
                  <option value="virtual">Virtual</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3} className="d-flex align-items-end">
              <Badge bg="info" className="fs-6">
                {filteredBookings.length} of {bookings.length} bookings
              </Badge>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Bookings Table */}
      <Card className="shadow-sm">
        <Card.Body className="p-0">
          {filteredBookings.length === 0 ? (
            <div className="text-center py-5 text-muted">
              {bookings.length === 0 ? 'No bookings found.' : 'No bookings match your filters.'}
            </div>
          ) : (
            <div className="table-responsive">
              <Table className="mb-0">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Couple</th>
                    <th>Contact</th>
                    <th>Tour Details</th>
                    <th>Wedding Date</th>
                    <th>Booked On</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>
                        <Badge bg="light" text="dark">#{booking.id}</Badge>
                      </td>
                      <td>
                        <div className="fw-medium">
                          {booking.first_name} {booking.last_name}
                        </div>
                        <div className="text-muted small">
                          & {booking.fiance_first_name} {booking.fiance_last_name}
                        </div>
                      </td>
                      <td>
                        <div>{booking.email}</div>
                        <div className="text-muted small">{booking.phone}</div>
                      </td>
                      <td>
                        <div className="mb-1">
                          <Badge 
                            bg={booking.tour_type === 'in_person' ? 'primary' : 'success'}
                            className="text-capitalize"
                          >
                            {booking.tour_type.replace('_', ' ')}
                          </Badge>
                        </div>
                        <div className="fw-medium">{formatDate(booking.tour_date)}</div>
                        <div className="text-muted small">
                          {formatTime(booking.tour_time)}
                        </div>
                      </td>
                      <td>{formatDate(booking.wedding_date)}</td>
                      <td className="text-muted small">
                        {formatDate(booking.created_at)}
                      </td>
                      <td>
                        <div className="d-flex gap-1">
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => handleViewBooking(booking)}
                          >
                            <FaEye />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Booking Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Booking Details #{selectedBooking?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBooking && (
            <Row>
              <Col md={6}>
                <h6>Customer Information</h6>
                <p><strong>Name:</strong> {selectedBooking.first_name} {selectedBooking.last_name}</p>
                <p><strong>Email:</strong> {selectedBooking.email}</p>
                <p><strong>Phone:</strong> {selectedBooking.phone}</p>
                
                <h6 className="mt-4">Fiancé Information</h6>
                <p><strong>Name:</strong> {selectedBooking.fiance_first_name} {selectedBooking.fiance_last_name}</p>
              </Col>
              <Col md={6}>
                <h6>Tour Information</h6>
                <p><strong>Type:</strong> 
                  <Badge 
                    bg={selectedBooking.tour_type === 'in_person' ? 'primary' : 'success'}
                    className="ms-2 text-capitalize"
                  >
                    {selectedBooking.tour_type.replace('_', ' ')}
                  </Badge>
                </p>
                <p><strong>Date:</strong> {formatDate(selectedBooking.tour_date)}</p>
                <p><strong>Time:</strong> {formatTime(selectedBooking.tour_time)}</p>
                <p><strong>Wedding Date:</strong> {formatDate(selectedBooking.wedding_date)}</p>
                <p><strong>Booked On:</strong> {formatDate(selectedBooking.created_at)}</p>
              </Col>
              {selectedBooking.message && (
                <Col xs={12}>
                  <h6 className="mt-3">Message</h6>
                  <div className="bg-light p-3 rounded">
                    {selectedBooking.message}
                  </div>
                </Col>
              )}
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}