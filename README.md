# InVitro Capital - Healthcare Appointment System

A modern web application for managing healthcare appointments, built with Next.js and focused on providing an accessible and user-friendly experience.

## Live Demo

Visit the deployed application at: [https://in-vitro-capital-test.vercel.app/](https://in-vitro-capital-test.vercel.app/)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0.0 or higher)
  - Download from [Node.js official website](https://nodejs.org/)
  - To verify installation: `node --version`

- **npm** (comes with Node.js) or **yarn**
  - To verify npm: `npm --version`
  - To install yarn: `npm install --global yarn`
  - To verify yarn: `yarn --version`

- **Git**
  - Download from [Git official website](https://git-scm.com/)
  - To verify installation: `git --version`

- **Code Editor** (recommended)
  - [Visual Studio Code](https://code.visualstudio.com/)
  - Recommended extensions:
    - ESLint
    - Prettier
    - TypeScript and JavaScript extensions

## System Requirements

- **Operating System**: Windows 10+, macOS, or Linux
- **Memory**: Minimum 4GB RAM recommended
- **Disk Space**: At least 1GB of free space
- **Browser**: Modern browser like Chrome, Firefox, or Edge (latest versions)

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/nexar212/in-vitro-capital-test.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## AI Tools Usage

AI assistance was specifically utilized for:

- Implementing WCAG 2.1 compliance guidelines
- Optimizing color contrast ratios for better visibility
- Enhancing keyboard navigation patterns
- Implementing proper ARIA labels and roles
- Screen reader compatibility improvements

## Known Limitations & Next Steps

Current limitations of the system include:

1. **Authentication and User Roles**
   - Basic authentication system needed
   - Implementation of role-based access control (Admin/User)
   - Secure admin dashboard for system management

2. **Administrative Features Pending**
   - Doctor management system (Add/Edit/Remove doctors)
   - Doctor schedule management
   - Appointment approval/rejection system
   - Analytics dashboard for appointment tracking

3. **Limited Time Slot Management**
   - The system currently supports basic time slot booking
   - Future enhancement needed for recurring appointments
   - Need to implement doctor availability management

4. **Communication Features**
   - No direct communication channel between users and administrators
   - Limited notification system
   - No integration with messaging services

### Future Enhancements

1. **Authentication and User Management**
   - Implement secure user authentication system
   - Role-based access control (Admin/User)
   - User profile management
   - Password recovery system

2. **Administrative Dashboard**
   - Analytics dashboard showing:
     - Total appointments per day/week/month
     - Most requested doctors
     - Peak appointment hours
     - Cancellation rates
   - Doctor management interface
   - Appointment status management (Accept/Reject/Cancel)

3. **Doctor Management System**
   - Interface for adding new doctors
   - Doctor profile management including:
     - Personal information
     - Specialties
     - Working hours
     - Available time slots
   - Doctor schedule optimization

4. **Communication System**
   - Integration with WhatsApp Business API
   - Email notification system
   - In-app messaging system
   - Contact form for general inquiries
   - Automated appointment reminders

5. **Additional Features**
   - Implement real-time notifications
   - Add multi-language support
   - Integrate with electronic health record systems
   - Enhanced reporting capabilities
   - Mobile app development

6. **Technical Improvements**
   - Enhance mobile responsiveness
   - Implement offline capabilities
   - Calendar integration (Google Calendar, Outlook)
   - Real-time updates for appointment status

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React Query
- Zustand

## License

MIT

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
