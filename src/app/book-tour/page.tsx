import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function BookTourPage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-section d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: 'url(/images/ourWeddingHall_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
          position: 'relative'
        }}
      >
        <div 
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}
        ></div>
        
        <Container className="position-relative">
          <Row>
            <Col>
              <h1 className="display-4 mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                schedule a tour and discover our venue pricing
              </h1>
              <p className="lead mb-5">
                We invite you to schedule a tour of Acre 31 to see firsthand why we choose to be your special day. During your 
                visit, we'll walk you through our venue spaces, discuss your wedding plans, and provide you with a detailed 
                breakdown of our wedding venue pricing options. We are confident that once you see our beautiful venue, 
                you'll know that Acre 31 is the perfect place to say "I do".
              </p>
              
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mb-4">
                <Link href="/schedule-in-person-tour" passHref>
                  <Button 
                    variant="outline-light" 
                    size="lg"
                    className="px-5 py-3"
                    style={{
                      borderColor: '#d32f2f',
                      color: '#d32f2f',
                      backgroundColor: 'transparent',
                      fontWeight: 'bold',
                      minWidth: '300px'
                    }}
                  >
                    SCHEDULE YOUR IN-PERSON TOUR
                  </Button>
                </Link>
                
                <Link href="/schedule-virtual-tour" passHref>
                  <Button 
                    variant="outline-light" 
                    size="lg"
                    className="px-5 py-3"
                    style={{
                      borderColor: '#d32f2f',
                      color: '#d32f2f',
                      backgroundColor: 'transparent',
                      fontWeight: 'bold',
                      minWidth: '300px'
                    }}
                  >
                    SCHEDULE YOUR VIRTUAL TOUR
                  </Button>
                </Link>
              </div>
              
              <div className="mt-4">
                <Link href="/available-dates" passHref>
                  <Button 
                    variant="secondary"
                    size="lg"
                    className="px-4 py-2"
                    style={{
                      backgroundColor: '#6e7158',
                      borderColor: '#6e7158',
                      fontWeight: 'bold'
                    }}
                  >
                    2025 AVAILABLE DATES
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <p className="text-muted mb-2">EXPLORE OUR</p>
              <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontStyle: 'italic' }}>
                photo gallery
              </h2>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4}>
              <div className="gallery-item text-center">
                <img 
                  src="/images/ourVenue_1.jpg" 
                  alt="Venue Gallery" 
                  className="img-fluid rounded mb-3"
                  style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                />
                <h5>Venue Gallery</h5>
                <p className="text-muted small">View our beautiful spaces</p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="gallery-item text-center">
                <img 
                  src="/images/ourVenue_2.jpg" 
                  alt="Reception Gallery" 
                  className="img-fluid rounded mb-3"
                  style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                />
                <h5>Reception Gallery</h5>
                <p className="text-muted small">Celebrate in style</p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="gallery-item text-center">
                <img 
                  src="/images/ourWeddingHall_2.jpg" 
                  alt="Ceremony Gallery" 
                  className="img-fluid rounded mb-3"
                  style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                />
                <h5>Ceremony Gallery</h5>
                <p className="text-muted small">Say "I do" here</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}