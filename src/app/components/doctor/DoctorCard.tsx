'use client';

import Image from 'next/image';
import { Doctor } from '@/app/lib/types';

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctor: Doctor) => void;
}

export function DoctorCard({ doctor, onBookAppointment }: DoctorCardProps) {
  return (
    <div 
      className="rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow"
      tabIndex={0}
      role="article"
      aria-labelledby={`doctor-name-${doctor.id}`}
    >
      <div className="flex items-start space-x-4">
        <div className="relative w-24 h-24">
          <Image
            src={doctor.photoUrl}
            alt={`Portrait of ${doctor.name}`}
            fill
            className="rounded-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 
            id={`doctor-name-${doctor.id}`}
            className="text-lg font-semibold text-blue-900"
          >
            {doctor.name}
          </h3>
          <p className="text-gray-900">
            Specialty: {doctor.specialty}
          </p>
          <div className="flex items-center mt-2" aria-label={`Rating: ${doctor.rating} out of 5`}>
            <span className="text-blue-900">★</span>
            <span className="ml-1 text-gray-900">
              {doctor.rating}
            </span>
          </div>
          <p className="text-sm text-gray-900 mt-1">
            Location: {doctor.location}
          </p>
        </div>
      </div>
      
      <div className="mt-4">
        <button
          onClick={() => onBookAppointment(doctor)}
          className="w-full bg-blue-900 text-white py-2 px-4 rounded-md 
                   hover:bg-blue-800 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
          aria-label={`Book appointment with ${doctor.name}`}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
} 