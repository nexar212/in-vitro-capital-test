'use client';

import { useState } from 'react';
import { DoctorCard } from './components/doctor/DoctorCard';
import { AppointmentModal } from './components/appointment/AppointmentModal';
import { AppointmentList } from './components/appointment/AppointmentList';
import { DoctorFilter } from './components/doctor/DoctorFilter';
import { Toast } from './components/ui/Toast';
import { LoadingState } from './components/ui/LoadingState';
import { useStore } from './lib/store/useStore';
import { Doctor, Specialty } from './lib/types';

export default function Home() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const doctors = useStore(state => state.filterDoctors());
  const setSelectedSpecialty = useStore(state => state.setSelectedSpecialty);

  const handleBookAppointment = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  const handleSpecialtyChange = (specialty: Specialty | null) => {
    setIsLoading(true);
    try {
      setSelectedSpecialty(specialty);
      setToast({
        message: 'Filter applied successfully',
        type: 'success'
      });
    } catch (error) {
      setToast({
        message: 'Error applying filter',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-900">
        Healthcare Platform
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              Find a Doctor
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <label 
                htmlFor="specialty" 
                className="block text-lg font-semibold text-blue-900 mb-2"
              >
                Filter by Specialty
              </label>
              <select
                id="specialty"
                className="w-full p-2 border border-gray-300 rounded-md text-gray-900 
                         focus:ring-2 focus:ring-blue-200 focus:border-blue-900"
                onChange={(e) => handleSpecialtyChange(e.target.value as Specialty || null)}
                defaultValue=""
              >
                <option value="">All Specialties</option>
                {['Cardiology', 'Dermatology', 'Family Medicine', 'Neurology', 'Pediatrics'].map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {isLoading ? (
            <LoadingState />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {doctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onBookAppointment={handleBookAppointment}
                />
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-1 mt-8 lg:mt-0">
          <AppointmentList />
        </div>
      </div>

      {selectedDoctor && (
        <AppointmentModal
          doctor={selectedDoctor}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </main>
  );
}
