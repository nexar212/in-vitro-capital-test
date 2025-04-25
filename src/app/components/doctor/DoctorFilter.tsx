'use client';

import { Specialty } from '@/app/lib/types';
import { specialties } from '@/app/lib/data/mockData';

interface DoctorFilterProps {
  onSpecialtyChange: (specialty: Specialty | null) => void;
}

export function DoctorFilter({ onSpecialtyChange }: DoctorFilterProps) {
  return (
    <div className="mb-6">
      <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
        Filter by Specialty
      </label>
      <select
        id="specialty"
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        onChange={(e) => onSpecialtyChange(e.target.value as Specialty || null)}
        defaultValue=""
      >
        <option value="">All Specialties</option>
        {specialties.map((specialty) => (
          <option key={specialty} value={specialty}>
            {specialty}
          </option>
        ))}
      </select>
    </div>
  );
} 