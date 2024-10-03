# Doctor Appointment Booking System (Frontend)

Overview
This is a Doctor Appointment Booking System frontend project built using React.js and Tailwind CSS. It allows patients to book appointments with doctors based on their availability and specialty. The system ensures that only available time slots are displayed, streamlining the booking process for users.

Features
Doctor Specialty Selection: Patients can choose a doctor based on their specialty, ensuring they book with the right expert for their needs.
Available Time Slots: Only available appointment slots are shown to users, making the booking process efficient and error-free.
Dynamic Booking UI: The interface dynamically updates based on the doctor’s availability for each day.
Responsive Design: Built with Tailwind CSS, the system is fully responsive and works seamlessly across devices.
Prerequisites
Before you begin, ensure you have the following installed:

Node.js: Download Node.js
NPM (comes with Node.js): Download NPM

Installation
1.Clone the repository:
git clone https://github.com/yourusername/doctor-appointment-booking.git
2.Navigate to the project directory:
cd doctor-appointment-booking
3.Install dependencies:
npm install
Usage
1.Start the development server:
npm run dev

2.Booking Flow:

Select a doctor based on their specialty.
Choose a date and time based on the doctor’s availability.
Confirm the appointment.

Code Structure
Here's the structure of the main components in the project:

src/
│
├── assets/                   # Static assets such as images, logos
│   └── doctorImage.png
│
├── components/               # Reusable components
│   ├── AppointmentSlot.jsx   # Displays available time slots for booking
│   ├── DoctorCard.jsx        # Card component to display doctor's details and specialties
│   ├── DatePicker.jsx        # Component for selecting appointment date
│   └── Navbar.jsx            # Navigation bar for the app
│
├── pages/                    # Page components for different routes
│   ├── BookingPage.jsx       # Main booking page where users select time and doctor
│   └── ConfirmationPage.jsx  # Confirmation page after booking is made
│
├── App.jsx                   # Main App component that combines all the components
├── index.js                  # Entry point for React
└── styles/                   # Stylesheets for Tailwind CSS customization
    └── tailwind.css

    Key Functions
AppointmentSlot.jsx
Purpose: This component displays available time slots for the selected doctor and date.
Key Function: handleSlotSelection(slot)
Description: This function triggers when the user selects an available time slot, passing the selected time to the booking confirmation process.
DoctorCard.jsx
Purpose: Displays doctor details, including their specialty, and allows the user to select a doctor.
Key Function: selectDoctor(doctorId)
Description: This function allows the user to select a specific doctor based on their specialty. Once a doctor is selected, it fetches their available appointment slots.
DatePicker.jsx
Purpose: Provides a user-friendly interface for selecting an appointment date.
Key Function: handleDateChange(date)
Description: This function updates the selected date and fetches available slots for the doctor on that date.
