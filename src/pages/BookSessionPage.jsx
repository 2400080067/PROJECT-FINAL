import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SessionBookingForm } from '../components/SessionBookingForm';

/**
 * BookSessionPage - Page for students to book therapy sessions
 */
export const BookSessionPage = () => {
  const { isAuthenticated } = useAuth();

  const [submittedData, setSubmittedData] = useState(null);

  const handleSessionBooked = (formData) => {
    setSubmittedData(formData);
    alert('✓ Session booked successfully! Check your email for confirmation.');
    setTimeout(() => {
      setSubmittedData(null);
    }, 3000);
  };

  const therapists = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialization: 'Anxiety & Stress',
      experience: '10 years',
      image: '👩‍⚕️',
      availability: 'Mon-Fri 9AM-5PM'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialization: 'Depression & Trauma',
      experience: '12 years',
      image: '👨‍⚕️',
      availability: 'Tue-Sat 10AM-6PM'
    },
    {
      id: 3,
      name: 'Dr. Emma Rodriguez',
      specialization: 'Relationships & Family',
      experience: '8 years',
      image: '👩‍⚕️',
      availability: 'Mon-Wed 1PM-7PM'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialization: 'Academic Stress & ADHD',
      experience: '9 years',
      image: '👨‍⚕️',
      availability: 'Wed-Sun 2PM-8PM'
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            📅 Book a Therapy Session
          </h1>
          <p className="text-xl text-gray-600">
            Schedule a session with one of our professional therapists
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Available Therapists */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">👨‍⚕️ Our Therapists</h2>
              <div className="space-y-4">
                {therapists.map(therapist => (
                  <div key={therapist.id} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition">
                    <p className="text-3xl mb-2">{therapist.image}</p>
                    <p className="font-semibold text-gray-800">{therapist.name}</p>
                    <p className="text-xs text-purple-600 font-semibold mb-2">
                      {therapist.specialization}
                    </p>
                    <p className="text-xs text-gray-600">
                      {therapist.experience} experience
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {therapist.availability}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Complete Your Booking</h2>

              {submittedData && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800 font-semibold mb-2">✓ Booking Confirmed!</p>
                  <p className="text-sm text-green-700">
                    Your session with {submittedData.therapistName} is scheduled for{' '}
                    {submittedData.sessionDate} at {submittedData.sessionTime}
                  </p>
                </div>
              )}

              <SessionBookingForm onSubmit={handleSessionBooked} />

              {/* Important Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4">ℹ️ Important Information</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Sessions are confidential and securely encrypted</li>
                  <li>✓ First session is complimentary for new users</li>
                  <li>✓ You can reschedule up to 24 hours in advance</li>
                  <li>✓ A confirmation email will be sent immediately</li>
                  <li>✓ Join 5 minutes early for virtual sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
