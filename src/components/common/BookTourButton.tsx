'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

interface BookTourButtonProps {
  variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary';
  size?: 'sm' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export default function BookTourButton({ 
  variant = 'primary', 
  size, 
  className = '',
  children = 'Book Your Tour'
}: BookTourButtonProps) {
  return (
    <Link href="/book-tour" passHref>
      <Button
        variant={variant}
        size={size}
        className={className}
        style={{
          backgroundColor: variant === 'primary' ? '#6e7158' : undefined,
          borderColor: '#6e7158',
          color: variant.includes('outline') ? '#6e7158' : undefined
        }}
      >
        {children}
      </Button>
    </Link>
  );
}