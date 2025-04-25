import { Doctor, Specialty } from '../types';

export const specialties: Specialty[] = [
  'Cardiology',
  'Dermatology',
  'Family Medicine',
  'Neurology',
  'Pediatrics',
];

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    photoUrl: '/doctors/doctor-1.jpg',
    rating: 4.8,
    location: 'Medical Center, Floor 3',
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      hours: ['09:00', '10:00', '11:00', '14:00', '15:00'],
    },
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Dermatology',
    photoUrl: '/doctors/doctor-2.jpg',
    rating: 4.9,
    location: 'Dermatology Clinic',
    availability: {
      days: ['Tuesday', 'Thursday'],
      hours: ['10:00', '11:00', '14:00', '15:00', '16:00'],
    },
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    photoUrl: '/doctors/doctor-3.jpg',
    rating: 4.7,
    location: 'Children\'s Medical Center',
    availability: {
      days: ['Monday', 'Tuesday', 'Thursday'],
      hours: ['09:00', '10:00', '11:00', '14:00', '15:00'],
    },
  },
  {
    id: '4',
    name: 'Dr. Sara Félix',
    specialty: 'Family Medicine',
    photoUrl: '/doctors/doctor-4.jpg',
    rating: 4.8,
    location: 'Family Medicine Clinic',
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      hours: ['09:00', '10:00', '11:00', '14:00', '15:00'],
    },
  },
  {
    id: '5',
    name: 'Dr. Raul García',
    specialty: 'Neurology',
    photoUrl: '/doctors/doctor-5.jpg',
    rating: 4.9,
    location: 'Neurology Clinic',
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      hours: ['09:00', '10:00', '11:00', '14:00', '15:00'],
    },
  },
]; 