'use client';

// components/TestimonialCarousel/TestimonialCarousel.jsx

import { useState, useEffect } from 'react';
import styles from './TestimonialCarousel.module.scss';
import { testimonials } from '@/data/testimonials';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.testimonialCarousel}>
      <div className={styles.carouselContainer}>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url(${testimonial.backgroundImage})` }}
          >
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <div className={styles.testimonialBox}>
                <h3 className={styles.name}>{testimonial.name}</h3>
                <p className={styles.text}>{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button 
          className={`${styles.navArrow} ${styles.prevArrow}`}
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button 
          className={`${styles.navArrow} ${styles.nextArrow}`}
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;