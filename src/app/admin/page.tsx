'use client';

import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Alert, Badge, Table } from 'react-bootstrap';
import { FaCalendarAlt, FaClock, FaUsers, FaChartLine } from 'react-icons/fa';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001/api';

interface DashboardStats {
  totalBookings: number;
  todayBookings: number;
  upcomingTours: number;
  availableSlots: number;
}

interface RecentBooking {
  id: number;
  first_name: string;
  last_name: string;
  tour_date: string;
  tour_time: string;
  tour_type: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalBookings: 0,
    todayBookings: 0,
    upcomingTours: 0,
    availableSlots: 0
  });
  const [recentBookings, setRecentBookings] = useState<RecentBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch dashboard stats
      const dashboardResponse = await axios.get(`${API_BASE_URL}/admin/dashboard`);
      const dashboardStats = dashboardResponse.data;
      
      // Fetch recent bookings
      const bookingsResponse = await axios.get(`${API_BASE_URL}/admin/bookings`);
      const bookings = bookingsResponse.data;
      
      setStats({
        totalBookings: dashboardStats.totalBookings,
        todayBookings: dashboardStats.todayBookings,
        upcomingTours: dashboardStats.upcomingTours,
        availableSlots: dashboardStats.availableDates
      });
      
      // Set recent bookings (last 5)
      setRecentBookings(bookings.slice(0, 5));
      
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
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
        <h1 className="h3 mb-0">Dashboard</h1>
        <small className="text-muted">Welcome to Acre31 Admin Panel</small>
      </div>

      {error && (
        <Alert variant="danger" className="mb-4">
          {error}
        </Alert>
      )}

      {/* Stats Cards */}
      <Row className="mb-4">
        <Col md={3} className="mb-3">
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="flex-shrink-0 me-3">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '48px', height: '48px', backgroundColor: '#e3f2fd' }}
                >
                  <FaUsers className="text-primary" size={20} />
                </div>
              </div>
              <div>
                <div className="h4 mb-0">{stats.totalBookings}</div>
                <div className="text-muted small">Total Bookings</div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-3">
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="flex-shrink-0 me-3">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '48px', height: '48px', backgroundColor: '#e8f5e8' }}
                >
                  <FaCalendarAlt className="text-success" size={20} />
                </div>
              </div>
              <div>
                <div className="h4 mb-0">{stats.todayBookings}</div>
                <div className="text-muted small">Today's Tours</div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-3">
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="flex-shrink-0 me-3">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '48px', height: '48px', backgroundColor: '#fff3e0' }}
                >
                  <FaChartLine className="text-warning" size={20} />
                </div>
              </div>
              <div>
                <div className="h4 mb-0">{stats.upcomingTours}</div>
                <div className="text-muted small">Upcoming Tours</div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-3">
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="flex-shrink-0 me-3">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '48px', height: '48px', backgroundColor: '#fce4ec' }}
                >
                  <FaClock className="text-danger" size={20} />
                </div>
              </div>
              <div>
                <div className="h4 mb-0">{stats.availableSlots}</div>
                <div className="text-muted small">Available Slots (30 days)</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Bookings */}
      <Row>
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-white border-bottom">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Recent Bookings</h5>
                <a href="/admin/bookings" className="btn btn-sm btn-outline-primary">
                  View All
                </a>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              {recentBookings.length === 0 ? (
                <div className="text-center py-4 text-muted">
                  No bookings yet
                </div>
              ) : (
                <Table responsive className="mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Customer</th>
                      <th>Tour Date</th>
                      <th>Time</th>
                      <th>Type</th>
                      <th>Booked On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking.id}>
                        <td>
                          <div className="fw-medium">
                            {booking.first_name} {booking.last_name}
                          </div>
                        </td>
                        <td>{formatDate(booking.tour_date)}</td>
                        <td>{formatTime(booking.tour_time)}</td>
                        <td>
                          <Badge 
                            bg={booking.tour_type === 'in_person' ? 'primary' : 'success'}
                            className="text-capitalize"
                          >
                            {booking.tour_type.replace('_', ' ')}
                          </Badge>
                        </td>
                        <td className="text-muted small">
                          {formatDate(booking.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}