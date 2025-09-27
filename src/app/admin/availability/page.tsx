'use client';

import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Alert, Row, Col, Badge } from 'react-bootstrap';
import { FaSave, FaCalendarCheck } from 'react-icons/fa';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001/api';

interface TourAvailability {
  id: number;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}

export default function AvailabilityPage() {
  const [availability, setAvailability] = useState<TourAvailability | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const days = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' }
  ];

  useEffect(() => {
    fetchAvailability();
  }, []);

  const fetchAvailability = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/admin/availability`);
      setAvailability(response.data);
    } catch (err) {
      console.error('Error fetching availability:', err);
      setError('Failed to load availability data');
    } finally {
      setLoading(false);
    }
  };

  const handleDayToggle = (day: string) => {
    if (!availability) return;
    
    setAvailability(prev => ({
      ...prev!,
      [day]: !prev![day as keyof TourAvailability]
    }));
  };

  const handleSave = async () => {
    if (!availability) return;

    try {
      setSaving(true);
      setError('');
      setSuccess('');

      const response = await axios.put(`${API_BASE_URL}/admin/availability`, availability);
      
      if (response.data.message) {
        setSuccess('Availability settings updated successfully!');
        // Refresh the data
        fetchAvailability();
      }
    } catch (err) {
      console.error('Error saving availability:', err);
      setError('Failed to save availability settings');
    } finally {
      setSaving(false);
    }
  };

  const getActiveDaysCount = () => {
    if (!availability) return 0;
    return days.filter(day => availability[day.key as keyof TourAvailability]).length;
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
          <h1 className="h3 mb-0">Tour Availability</h1>
          <p className="text-muted mb-0">Configure which days of the week tours are available</p>
        </div>
        <Badge bg="info" className="fs-6">
          {getActiveDaysCount()} of 7 days active
        </Badge>
      </div>

      {error && (
        <Alert variant="danger" className="mb-4">
          {error}
        </Alert>
      )}

      {success && (
        <Alert variant="success" className="mb-4">
          {success}
        </Alert>
      )}

      <Row>
        <Col lg={8}>
          <Card className="shadow-sm">
            <Card.Header className="bg-white border-bottom">
              <div className="d-flex align-items-center">
                <FaCalendarCheck className="me-2 text-primary" />
                <h5 className="mb-0">Weekly Availability</h5>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="text-muted mb-4">
                Select the days of the week when tours are available. Customers will only be able to book tours on the selected days.
              </p>

              <Row className="g-3">
                {days.map((day) => (
                  <Col md={6} lg={4} key={day.key}>
                    <Card 
                      className={`h-100 cursor-pointer border-2 ${
                        availability?.[day.key as keyof TourAvailability] 
                          ? 'border-success bg-success bg-opacity-10' 
                          : 'border-light'
                      }`}
                      onClick={() => handleDayToggle(day.key)}
                      style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                    >
                      <Card.Body className="text-center py-4">
                        <Form.Check
                          type="checkbox"
                          id={`day-${day.key}`}
                          checked={Boolean(availability?.[day.key as keyof TourAvailability]) || false}
                          onChange={() => handleDayToggle(day.key)}
                          className="mb-2"
                          style={{ pointerEvents: 'none' }}
                        />
                        <div className="fw-medium">{day.label}</div>
                        <small className="text-muted">
                          {availability?.[day.key as keyof TourAvailability] ? 'Available' : 'Closed'}
                        </small>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="mt-4 pt-3 border-top">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <small className="text-muted">
                      Last updated: {availability ? new Date((availability as any).updated_at || '').toLocaleDateString() : 'Never'}
                    </small>
                  </div>
                  <Button 
                    variant="primary" 
                    onClick={handleSave}
                    disabled={saving}
                    className="px-4"
                  >
                    {saving ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <FaSave className="me-2" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm">
            <Card.Header className="bg-light">
              <h6 className="mb-0">Quick Stats</h6>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>Active Days:</span>
                  <Badge bg="primary">{getActiveDaysCount()}</Badge>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>Closed Days:</span>
                  <Badge bg="secondary">{7 - getActiveDaysCount()}</Badge>
                </div>
              </div>
              <hr />
              <small className="text-muted">
                Changes will affect future bookings. Existing bookings will not be modified.
              </small>
            </Card.Body>
          </Card>

          <Card className="shadow-sm mt-3">
            <Card.Header className="bg-light">
              <h6 className="mb-0">Tips</h6>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled mb-0 small">
                <li className="mb-2">• Most venues are closed on Sundays</li>
                <li className="mb-2">• Consider staff availability when setting days</li>
                <li className="mb-2">• Weekend slots typically book faster</li>
                <li>• You can always adjust these settings later</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}