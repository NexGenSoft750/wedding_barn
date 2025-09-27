'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Tabs, Alert } from 'react-bootstrap';
import BookingAvailability from '@/components/booking/BookingAvailability';
import BookingForm from '@/components/booking/BookingForm';
import { BookingData, AvailabilityData } from '@/types/booking';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export default function ScheduleVirtualTourPage() {
  const [activeTab, setActiveTab] = useState<string>('availability');
  const [bookingData, setBookingData] = useState<BookingData>({
    tour_date: '',
    tour_time: '',
    tour_type: 'virtual',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    fiance_first_name: '',
    fiance_last_name: '',
    wedding_date: '',
    message: ''
  });
  const [availabilityData, setAvailabilityData] = useState<AvailabilityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  useEffect(() => {
    fetchAvailabilityData();
  }, []);

  const fetchAvailabilityData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/tour-booking/availability`);
      if (response.data.success) {
        setAvailabilityData(response.data.data);
      } else {
        setError('Failed to load availability data');
      }
    } catch (err) {
      console.error('Error fetching availability:', err);
      setError('Failed to load availability data');
    } finally {
      setLoading(false);
    }
  };

  const handleDateTimeSelection = (date: string, time: string) => {
    console.log('handleDateTimeSelection called with:', { date, time });
    setBookingData(prev => ({
      ...prev,
      tour_date: date,
      tour_time: time
    }));
    setActiveTab('form');
  };

  const handleFormSubmit = async (formData: BookingData) => {
    try {
      console.log('handleFormSubmit called with:', formData);
      setLoading(true);
      setError('');
      
      console.log('Making API request to:', `${API_BASE_URL}/tour-booking`);
      const response = await axios.post(`${API_BASE_URL}/tour-booking`, formData);
      
      if (response.data.success) {
        setSuccess('Virtual tour booking created successfully! We will send you the meeting link.');
        // Reset form
        setBookingData({
          tour_date: '',
          tour_time: '',
          tour_type: 'virtual',
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          fiance_first_name: '',
          fiance_last_name: '',
          wedding_date: '',
          message: ''
        });
        setActiveTab('availability');
        // Refresh availability data
        fetchAvailabilityData();
      } else {
        setError(response.data.message || 'Failed to create booking');
      }
    } catch (err: any) {
      console.error('Error submitting booking:', err);
      if (err.response?.data?.errors) {
        const errorMessages = Object.values(err.response.data.errors).flat();
        setError(errorMessages.join(', '));
      } else {
        setError(err.response?.data?.message || 'Failed to create booking');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading && !availabilityData) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <div className="text-center mb-5">
            <h1 className="display-5">Schedule Your Virtual Tour</h1>
            <p className="lead">Join us online for a virtual tour of Acre 31 Wedding Venue</p>
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

          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k || 'availability')}
            className="mb-4"
          >
            <Tab eventKey="availability" title="Select Date & Time">
              {availabilityData && (
                <BookingAvailability
                  availabilityData={availabilityData}
                  selectedDate={bookingData.tour_date}
                  selectedTime={bookingData.tour_time}
                  onDateTimeSelect={handleDateTimeSelection}
                />
              )}
            </Tab>
            
            <Tab eventKey="form" title="Your Information">
              <BookingForm
                bookingData={bookingData}
                onSubmit={handleFormSubmit}
                loading={loading}
              />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}