import { render, screen, fireEvent } from '@testing-library/react';
import { DoctorCard } from '../components/doctor/DoctorCard';

const mockDoctor = {
  id: '1',
  name: 'Dr. Test',
  specialty: 'Testing',
  photoUrl: '/test.jpg',
  rating: 4.5,
  location: 'Test Location',
  availability: {
    days: ['Monday'],
    hours: ['09:00']
  }
};

describe('DoctorCard', () => {
  it('renders doctor information correctly', () => {
    render(<DoctorCard doctor={mockDoctor} onBookAppointment={() => {}} />);
    
    // Verificar el nombre del doctor
    expect(screen.getByText('Dr. Test')).toBeTruthy();
    
    // Verificar la especialidad (texto completo como aparece en el componente)
    expect(screen.getByText('Specialty: Testing')).toBeTruthy();
    
    // Verificar la ubicación (texto completo como aparece en el componente)
    expect(screen.getByText('Location: Test Location')).toBeTruthy();
    
    // Verificar que el botón está presente
    expect(screen.getByRole('button', { name: /book appointment/i })).toBeTruthy();
  });

  it('calls onBookAppointment when button is clicked', () => {
    const mockOnBook = jest.fn();
    render(<DoctorCard doctor={mockDoctor} onBookAppointment={mockOnBook} />);
    
    fireEvent.click(screen.getByText('Book Appointment'));
    expect(mockOnBook).toHaveBeenCalledWith(mockDoctor);
  });
});