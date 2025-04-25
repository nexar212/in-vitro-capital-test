'use client';

import { useStore } from '@/app/lib/store/useStore';

export function AppointmentList() {
  const appointments = useStore(state => state.appointments);
  const doctors = useStore(state => state.doctors);

  const getDoctorInfo = (doctorId: string) => {
    return doctors.find(doc => doc.id === doctorId);
  };

  if (appointments.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-800">No appointments scheduled yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">My Appointments</h2>
      <div className="grid gap-4">
        {appointments.map((appointment) => {
          const doctor = getDoctorInfo(appointment.doctorId);
          if (!doctor) return null;

          return (
            <div 
              key={appointment.id}
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{doctor.name}</h3>
                  <p className="text-gray-800">{doctor.specialty}</p>
                  <p className="text-gray-700 text-sm">{doctor.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{appointment.date}</p>
                  <p className="text-gray-800">{appointment.timeSlot}</p>
                  <span className={`
                    inline-block px-2 py-1 rounded-full text-sm mt-2
                    ${appointment.status === 'confirmed' ? 'bg-green-200 text-green-900' : 
                      appointment.status === 'pending' ? 'bg-yellow-200 text-yellow-900' : 
                      'bg-red-200 text-red-900'}
                  `}>
                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 