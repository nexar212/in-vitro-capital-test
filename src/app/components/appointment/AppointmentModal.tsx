'use client';

import { Doctor } from '@/app/lib/types';
import { useState } from 'react';
import { useStore } from '@/app/lib/store/useStore';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';

interface AppointmentModalProps {
  doctor: Doctor;
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentModal({ doctor, isOpen, onClose }: AppointmentModalProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  
  const addAppointment = useStore(state => state.addAppointment);
  const isTimeSlotAvailable = useStore(state => state.isTimeSlotAvailable);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;

    // Verificar disponibilidad antes de intentar reservar
    if (!isTimeSlotAvailable(doctor.id, selectedDate, selectedTime)) {
      setToast({
        message: 'This time slot is already booked. Please select another time.',
        type: 'error'
      });
      return;
    }
    
    const result = addAppointment({
      id: crypto.randomUUID(),
      doctorId: doctor.id,
      date: selectedDate,
      timeSlot: selectedTime,
      status: 'confirmed'
    });

    if (result.success) {
      setToast({
        message: result.message,
        type: 'success'
      });
      setTimeout(() => {
        onClose();
        setToast(null);
      }, 800);
    } else {
      setToast({
        message: result.message,
        type: 'error'
      });
    }
  };

  // Filtrar las horas disponibles
  const getAvailableTimeSlots = () => {
    return doctor.availability.hours.filter(time => 
      isTimeSlotAvailable(doctor.id, selectedDate, time)
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-md w-full m-4"
        role="document"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="modal-title" className="text-xl font-semibold text-blue-900">
            Book Appointment with {doctor.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2"
            aria-label="Close booking modal"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div role="group" aria-labelledby="date-label">
            <label 
              id="date-label"
              htmlFor="date" 
              className="block text-sm font-medium text-gray-900"
            >
              Select Date
            </label>
            <select
              id="date"
              className="mt-1 block w-full p-2 text-gray-900 bg-white border rounded-md shadow-sm
                       focus:border-blue-500 focus:ring-blue-500"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              aria-required="true"
            >
              <option value="" className="text-gray-900">Choose a date</option>
              {doctor.availability.days.map((day) => (
                <option key={day} value={day} className="text-gray-900">
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div role="group" aria-labelledby="time-label">
            <label 
              id="time-label"
              htmlFor="time" 
              className="block text-sm font-medium text-gray-900"
            >
              Select Time
            </label>
            <select
              id="time"
              className="mt-1 block w-full p-2 text-gray-900 bg-white border rounded-md shadow-sm
                       focus:border-blue-500 focus:ring-blue-500"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              aria-required="true"
            >
              <option value="" className="text-gray-900">Choose a time</option>
              {getAvailableTimeSlots().map((time) => (
                <option key={time} value={time} className="text-gray-900">
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <Button
              onClick={handleConfirm}
              disabled={!selectedDate || !selectedTime}
              fullWidth
              variant="primary"
              className="text-base font-medium"
            >
              Confirm Appointment
            </Button>
          </div>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
} 