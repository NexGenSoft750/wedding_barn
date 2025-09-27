'use client';

import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { BookingData } from '@/types/booking';

interface BookingFormProps {
  bookingData: BookingData;
  onSubmit: (data: BookingData) => void;
  loading: boolean;
}

export default function BookingForm({ bookingData, onSubmit, loading }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingData>(bookingData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Update form data when bookingData prop changes
  React.useEffect(() => {
    setFormData(bookingData);
  }, [bookingData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.fiance_first_name.trim()) {
      newErrors.fiance_first_name = 'Fiancé first name is required';
    }

    if (!formData.fiance_last_name.trim()) {
      newErrors.fiance_last_name = 'Fiancé last name is required';
    }

    if (!formData.wedding_date) {
      newErrors.wedding_date = 'Wedding date is required';
    }

    if (!formData.tour_date) {
      newErrors.tour_date = 'Please select a tour date from the "Select Date & Time" tab';
    }

    if (!formData.tour_time) {
      newErrors.tour_time = 'Please select a tour time from the "Select Date & Time" tab';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted with data:', formData);
    console.log('Validation result:', validateForm());
    
    if (validateForm()) {
      console.log('Calling onSubmit with:', formData);
      onSubmit(formData);
    } else {
      console.log('Form validation failed:', errors);
    }
  };

  return (
    <div className="booking-form">
      {(formData.tour_date && formData.tour_time) ? (
        <Alert variant="info" className="mb-4">
          <strong>Selected Tour:</strong> {formData.tour_date} at {formData.tour_time}
        </Alert>
      ) : (
        <Alert variant="warning" className="mb-4">
          <strong>Please select a date and time</strong> from the "Select Date & Time" tab before submitting your booking.
        </Alert>
      )}

      {(errors.tour_date || errors.tour_time) && (
        <Alert variant="danger" className="mb-4">
          <strong>Missing Tour Selection:</strong>
          {errors.tour_date && <div>• {errors.tour_date}</div>}
          {errors.tour_time && <div>• {errors.tour_time}</div>}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>First Name *</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                isInvalid={!!errors.first_name}
                placeholder="Please provide your first name"
              />
              <Form.Control.Feedback type="invalid">
                {errors.first_name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Last Name *</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                isInvalid={!!errors.last_name}
                placeholder="Please provide your last name"
              />
              <Form.Control.Feedback type="invalid">
                {errors.last_name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                isInvalid={!!errors.email}
                placeholder="Please provide your email address"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone *</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                isInvalid={!!errors.phone}
                placeholder="Please provide your phone number"
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Fiancé First Name *</Form.Label>
              <Form.Control
                type="text"
                name="fiance_first_name"
                value={formData.fiance_first_name}
                onChange={handleInputChange}
                isInvalid={!!errors.fiance_first_name}
                placeholder="Fiancé's first name"
              />
              <Form.Control.Feedback type="invalid">
                {errors.fiance_first_name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Fiancé Last Name *</Form.Label>
              <Form.Control
                type="text"
                name="fiance_last_name"
                value={formData.fiance_last_name}
                onChange={handleInputChange}
                isInvalid={!!errors.fiance_last_name}
                placeholder="Fiancé's last name"
              />
              <Form.Control.Feedback type="invalid">
                {errors.fiance_last_name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>What wedding date(s) did you have in mind? *</Form.Label>
          <Form.Control
            type="date"
            name="wedding_date"
            value={formData.wedding_date}
            onChange={handleInputChange}
            isInvalid={!!errors.wedding_date}
          />
          <Form.Control.Feedback type="invalid">
            {errors.wedding_date}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Any comments, notes, or questions for us?</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your vision for your special day..."
          />
        </Form.Group>

        <div className="mb-3">
          <small className="text-muted">
            By clicking submit, you agree to receive emails from us! Don't see the email? Check your spam folder!
          </small>
        </div>

        <div className="text-center">
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            style={{ 
              backgroundColor: '#6e7158', 
              borderColor: '#6e7158',
              minWidth: '200px'
            }}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Submitting...
              </>
            ) : (
              'Submit Booking Request'
            )}
          </Button>
        </div>
      </Form>
    </div>
  );
}