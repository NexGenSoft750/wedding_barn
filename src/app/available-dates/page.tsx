'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Alert, Badge } from 'react-bootstrap';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

interface AvailableDate {
  date: string;
  dayName: string;
  availableSlots: number;
  totalSlots: number;
}

export default function AvailableDatesPage() {
  const [availableDates, setAvailableDates] = useState<AvailableDate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchAvailableDates();
  }, []);

  const fetchAvailableDates = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/tour-booking/availability`);
      if (response.data.success) {
        const { availability, timeSlots, bookedTimes } = response.data.data;
        
        // Generate available dates for the next 90 days
        const dates: AvailableDate[] = [];
        const today = new Date();
        
        for (let i = 0; i < 90; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() + i);
          
          const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
          const dateStr = date.toISOString().split('T')[0];
          
          // Check if this day is available
          const isDayAvailable = availability[dayName as keyof typeof availability];
          
          if (isDayAvailable) {
            const bookedTimesForDate = bookedTimes[dateStr] || [];
            const availableSlots = timeSlots.length - bookedTimesForDate.length;
            
            if (availableSlots > 0) {
              dates.push({
                date: dateStr,
                dayName: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
                availableSlots,
                totalSlots: timeSlots.length
              });
            }
          }
        }
        
        setAvailableDates(dates);
      } else {
        setError('Failed to load available dates');
      }
    } catch (err) {
      console.error('Error fetching available dates:', err);
      setError('Failed to load available dates');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
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
            <h1 className="display-5">2025 Available Dates</h1>
            <p className="lead">View our available tour dates for the upcoming months</p>
          </div>

          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}

          {availableDates.length === 0 ? (
            <Alert variant="info" className="text-center">
              No available dates found. Please contact us directly to schedule your tour.
            </Alert>
          ) : (
            <Row className="g-3">
              {availableDates.map((dateInfo, index) => (
                <Col md={6} lg={4} key={index}>
                  <Card className="h-100">
                    <Card.Body className="text-center">
                      <Card.Title>{dateInfo.dayName}</Card.Title>
                      <Card.Text>
                        <Badge 
                          bg={dateInfo.availableSlots > 3 ? 'success' : dateInfo.availableSlots > 1 ? 'warning' : 'danger'}
                          className="mb-2"
                        >
                          {dateInfo.availableSlots} of {dateInfo.totalSlots} slots available
                        </Badge>
                      </Card.Text>
                      <small className="text-muted">
                        {dateInfo.availableSlots > 3 ? 'Many slots available' : 
                         dateInfo.availableSlots > 1 ? 'Limited availability' : 
                         'Last slot available'}
                      </small>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          <div className="text-center mt-5">
            <p className="text-muted">
              Ready to book? Choose between an <a href="/schedule-in-person-tour">in-person tour</a> or <a href="/schedule-virtual-tour">virtual tour</a>.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}