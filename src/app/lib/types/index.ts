// Mover los tipos aquí 

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  photoUrl: string;
  rating: number;
  location: string;
  availability: {
    days: string[];
    hours: string[];
  };
}

export interface Appointment {
  id: string;
  doctorId: string;
  date: string;
  timeSlot: string;
  status: 'confirmed' | 'cancelled' | 'pending';
}

export type Specialty = 'Cardiology' | 'Dermatology' | 'Family Medicine' | 'Neurology' | 'Pediatrics'; 