'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container, Row, Col, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaCog, 
  FaUsers, 
  FaChartBar, 
  FaBars,
  FaHome,
  FaCalendarCheck,
  FaUserCog
} from 'react-icons/fa';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [showSidebar, setShowSidebar] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {
      title: 'Dashboard',
      href: '/admin',
      icon: <FaChartBar className="me-2" />
    },
    {
      title: 'Tour Bookings',
      href: '/admin/bookings',
      icon: <FaCalendarAlt className="me-2" />
    },
    {
      title: 'Availability',
      href: '/admin/availability',
      icon: <FaCalendarCheck className="me-2" />
    },
    {
      title: 'Time Slots',
      href: '/admin/time-slots',
      icon: <FaClock className="me-2" />
    },
    {
      title: 'Settings',
      href: '/admin/settings',
      icon: <FaCog className="me-2" />
    },
    {
      title: 'Users',
      href: '/admin/users',
      icon: <FaUserCog className="me-2" />
    }
  ];

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="admin-layout" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Top Navigation */}
      <Navbar bg="dark" variant="dark" className="shadow-sm">
        <Container fluid>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-light me-3 d-lg-none"
              onClick={() => setShowSidebar(true)}
            >
              <FaBars />
            </button>
            <Navbar.Brand href="/admin" className="d-flex align-items-center">
              <img 
                src="/images/acre31-logo.png" 
                alt="Acre31" 
                height="30" 
                className="me-2"
              />
              <span>Admin Panel</span>
            </Navbar.Brand>
          </div>
          
          <Nav className="ms-auto">
            <Nav.Link href="/" target="_blank" className="text-light">
              <FaHome className="me-1" />
              View Site
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="d-flex">
        {/* Desktop Sidebar */}
        <div 
          className="d-none d-lg-block bg-white shadow-sm"
          style={{ width: '250px', minHeight: 'calc(100vh - 56px)' }}
        >
          <div className="p-3">
            <Nav className="flex-column">
              {menuItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`d-flex align-items-center py-2 px-3 mb-1 rounded text-decoration-none ${
                    isActive(item.href) 
                      ? 'bg-primary text-white' 
                      : 'text-dark hover-bg-light'
                  }`}
                  style={{ 
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
            </Nav>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <Offcanvas 
          show={showSidebar} 
          onHide={() => setShowSidebar(false)}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Admin Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} passHref>
                  <Nav.Link
                    className={`d-flex align-items-center py-2 px-3 mb-1 rounded ${
                      isActive(item.href) 
                        ? 'bg-primary text-white' 
                        : 'text-dark'
                    }`}
                    onClick={() => setShowSidebar(false)}
                  >
                    {item.icon}
                    {item.title}
                  </Nav.Link>
                </Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Main Content */}
        <div className="flex-grow-1" style={{ minHeight: 'calc(100vh - 56px)' }}>
          <Container fluid className="p-4">
            {children}
          </Container>
        </div>
      </div>

      <style jsx>{`
        .hover-bg-light:hover {
          background-color: #f8f9fa !important;
        }
      `}</style>
    </div>
  );
}