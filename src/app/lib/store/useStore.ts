'use client';

import { create } from 'zustand';
import { Doctor, Appointment, Specialty } from '../types';
import { mockDoctors } from '../data/mockData';

interface StoreState {
  doctors: Doctor[];
  appointments: Appointment[];
  selectedSpecialty: Specialty | null;
  selectedDoctor: Doctor | null;
  setSelectedSpecialty: (specialty: Specialty | null) => void;
  setSelectedDoctor: (doctor: Doctor | null) => void;
  addAppointment: (appointment: Appointment) => { success: boolean; message: string };
  filterDoctors: () => Doctor[];
  isTimeSlotAvailable: (doctorId: string, date: string, timeSlot: string) => boolean;
}

export const useStore = create<StoreState>((set, get) => ({
  doctors: mockDoctors,
  appointments: [],
  selectedSpecialty: null,
  selectedDoctor: null,
  
  setSelectedSpecialty: (specialty) => set({ selectedSpecialty: specialty }),
  setSelectedDoctor: (doctor) => set({ selectedDoctor: doctor }),
  
  isTimeSlotAvailable: (doctorId: string, date: string, timeSlot: string) => {
    const { appointments } = get();
    return !appointments.some(
      app => 
        app.doctorId === doctorId && 
        app.date === date && 
        app.timeSlot === timeSlot &&
        app.status !== 'cancelled'
    );
  },
  
  addAppointment: (appointment) => {
    const { appointments } = get();
    
    // Verificar si el doctor ya tiene una cita en ese horario
    const isAvailable = get().isTimeSlotAvailable(
      appointment.doctorId,
      appointment.date,
      appointment.timeSlot
    );

    if (!isAvailable) {
      return {
        success: false,
        message: 'This time slot is already booked. Please select another time.'
      };
    }

    set({ appointments: [...appointments, appointment] });
    return {
      success: true,
      message: 'Appointment booked successfully!'
    };
  },
  
  filterDoctors: () => {
    const { doctors, selectedSpecialty } = get();
    if (!selectedSpecialty) return doctors;
    return doctors.filter(doctor => doctor.specialty === selectedSpecialty);
  },
})); 