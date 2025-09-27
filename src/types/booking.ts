export interface BookingData {
  tour_date: string;
  tour_time: string;
  tour_type: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  fiance_first_name: string;
  fiance_last_name: string;
  wedding_date: string;
  message: string;
}

export interface TimeSlot {
  id: number;
  time: string;
  period: string;
}

export interface TourAvailability {
  id: number;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}

export interface AvailabilityData {
  availability: TourAvailability;
  timeSlots: TimeSlot[];
  bookedDates: string[];
  bookedTimes: { [key: string]: string[] };
}