'use client';

import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { AvailabilityData } from '@/types/booking';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

interface BookingAvailabilityProps {
  availabilityData: AvailabilityData;
  selectedDate: string;
  selectedTime: string;
  onDateTimeSelect: (date: string, time: string) => void;
}

export default function BookingAvailability({
  availabilityData,
  selectedDate,
  selectedTime,
  onDateTimeSelect
}: BookingAvailabilityProps) {
  const [currentSelectedDate, setCurrentSelectedDate] = useState<string>(selectedDate);
  const [currentSelectedTime, setCurrentSelectedTime] = useState<string>(selectedTime);
  const [availableDates, setAvailableDates] = useState<Array<{
    date: string;
    dayName: string;
    dayNumber: number;
    isAvailable: boolean;
  }>>([]);

  useEffect(() => {
    generateAvailableDates();
  }, [availabilityData]);

  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    const { availability, bookedTimes, timeSlots } = availabilityData;

    // Generate dates for the next 60 days
    for (let i = 0; i < 60; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
      const dateStr = date.toISOString().split('T')[0];
      
      // Check if this day is available according to availability settings
      const isDayAvailable = Boolean(availability[dayName as keyof typeof availability]);
      
      // Check if all time slots are booked for this date
      const bookedTimesForDate = bookedTimes[dateStr] || [];
      const allTimeSlotsBooked = timeSlots.length > 0 && bookedTimesForDate.length >= timeSlots.length;
      
      const isAvailable = isDayAvailable && !allTimeSlotsBooked;

      dates.push({
        date: dateStr,
        dayName: date.toLocaleDateString('en-US', { weekday: 'long' }),
        dayNumber: date.getDate(),
        isAvailable
      });
    }

    setAvailableDates(dates);
  };

  const handleDateSelect = (date: string) => {
    setCurrentSelectedDate(date);
    setCurrentSelectedTime(''); // Reset time selection when date changes
  };

  const handleTimeSelect = (time: string) => {
    setCurrentSelectedTime(time);
  };

  const handleNext = () => {
    console.log('handleNext called with:', { currentSelectedDate, currentSelectedTime });
    if (currentSelectedDate && currentSelectedTime) {
      console.log('Calling onDateTimeSelect with:', currentSelectedDate, currentSelectedTime);
      onDateTimeSelect(currentSelectedDate, currentSelectedTime);
    } else {
      console.log('Missing date or time selection');
    }
  };

  const getAvailableTimesForDate = (date: string) => {
    const bookedTimesForDate = availabilityData.bookedTimes[date] || [];
    return availabilityData.timeSlots.filter(slot => 
      !bookedTimesForDate.includes(slot.time)
    );
  };

  const getBookedTimesForDate = (date: string) => {
    const bookedTimesForDate = availabilityData.bookedTimes[date] || [];
    return availabilityData.timeSlots.filter(slot => 
      bookedTimesForDate.includes(slot.time)
    );
  };

  return (
    <div className="booking-availability">
      <Row>
        <Col lg={6}>
          <div className="tour-info mb-4">
            <h3>1st Step Venue Tour - In-Person</h3>
            <h4>Acre 31</h4>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-clock-fill me-2"></i>
              <span>Appointment Duration: 35 minutes</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-geo-alt-fill me-2"></i>
              <span>Acre 31 - 1490 FM2104, Smithville, TX 78957</span>
            </div>
          </div>
        </Col>
        
        <Col lg={6}>
          <div className="date-time-selection">
            <div className="mb-4">
              <p className="text-muted">
                Your Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
              </p>
            </div>

            {/* Date Selection Swiper */}
            <div className="mb-4">
              <h5>Select Date</h5>
              <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={10}
                slidesPerView="auto"
                freeMode={true}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                className="date-swiper"
              >
                {availableDates.map((dateInfo) => (
                  <SwiperSlide key={dateInfo.date} style={{ width: 'auto' }}>
                    <div
                      className={`date-slide ${
                        currentSelectedDate === dateInfo.date ? 'active' : ''
                      } ${!dateInfo.isAvailable ? 'disabled' : ''}`}
                      onClick={() => dateInfo.isAvailable && handleDateSelect(dateInfo.date)}
                      style={{
                        padding: '10px 15px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        textAlign: 'center',
                        cursor: dateInfo.isAvailable ? 'pointer' : 'not-allowed',
                        backgroundColor: currentSelectedDate === dateInfo.date ? '#6e7158' : 
                                       !dateInfo.isAvailable ? '#f8f9fa' : 'white',
                        color: currentSelectedDate === dateInfo.date ? 'white' : 
                               !dateInfo.isAvailable ? '#6c757d' : 'black',
                        minWidth: '80px'
                      }}
                    >
                      <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                        {dateInfo.dayName}
                      </div>
                      <div style={{ fontSize: '1.1rem' }}>
                        {dateInfo.dayNumber}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </Swiper>
            </div>

            {/* Time Selection */}
            {currentSelectedDate && (
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Select Time</h5>
                  <small className="text-muted">
                    {getAvailableTimesForDate(currentSelectedDate).length} of {availabilityData.timeSlots.length} slots available
                  </small>
                </div>
                <div className="time-slots">
                  <Form>
                    {/* Available Time Slots */}
                    {getAvailableTimesForDate(currentSelectedDate).map((slot) => (
                      <Form.Check
                        key={slot.id}
                        type="radio"
                        id={`time-${slot.id}`}
                        name="tourTime"
                        label={slot.time}
                        value={slot.time}
                        checked={currentSelectedTime === slot.time}
                        onChange={(e) => handleTimeSelect(e.target.value)}
                        className="mb-2"
                      />
                    ))}
                    
                    {/* Booked Time Slots (Disabled) */}
                    {getBookedTimesForDate(currentSelectedDate).map((slot) => (
                      <Form.Check
                        key={`booked-${slot.id}`}
                        type="radio"
                        id={`booked-time-${slot.id}`}
                        name="tourTime"
                        label={
                          <span className="text-muted">
                            {slot.time} <small>(Booked)</small>
                          </span>
                        }
                        value={slot.time}
                        disabled={true}
                        className="mb-2"
                        style={{ opacity: 0.5 }}
                      />
                    ))}
                  </Form>
                  
                  {getAvailableTimesForDate(currentSelectedDate).length === 0 && (
                    <div className="text-center p-4 bg-light rounded mt-3">
                      <i className="bi bi-calendar-x text-muted mb-2" style={{ fontSize: '2rem' }}></i>
                      <p className="text-muted mb-0">All time slots are booked for this date.</p>
                      <small className="text-muted">Please select another date.</small>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Next Button */}
            {currentSelectedDate && currentSelectedTime && (
              <div className="text-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleNext}
                  style={{ backgroundColor: '#6e7158', borderColor: '#6e7158' }}
                >
                  Next: Enter Your Information
                </Button>
              </div>
            )}
          </div>
        </Col>
      </Row>

      <style jsx>{`
        .date-swiper {
          padding: 20px 0;
        }
        
        .date-slide:hover:not(.disabled) {
          background-color: #f8f9fa !important;
        }
        
        .date-slide.active:hover {
          background-color: #6e7158 !important;
        }
        
        .swiper-button-prev,
        .swiper-button-next {
          color: #6e7158;
        }
      `}</style>
    </div>
  );
}