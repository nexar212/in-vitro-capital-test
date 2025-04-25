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
    
    expect(screen.getByText('Dr. Test')).toBeTruthy();
    expect(screen.getByText('Testing')).toBeTruthy();
    expect(screen.getByText('Test Location')).toBeTruthy();
  });

  it('calls onBookAppointment when button is clicked', () => {
    const mockOnBook = jest.fn();
    render(<DoctorCard doctor={mockDoctor} onBookAppointment={mockOnBook} />);
    
    fireEvent.click(screen.getByText('Book Appointment'));
    expect(mockOnBook).toHaveBeenCalledWith(mockDoctor);
  });
}); 