export const config = {
  siteName: 'Healthcare Platform',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  maxAppointmentsPerDay: 8,
  appointmentDuration: 30, // minutes
  workingHours: {
    start: '09:00',
    end: '17:00',
  },
}; 