import React, { useState } from 'react';

/**
 * SessionBookingForm component - Form for booking therapy sessions
 * Handles form state and validation
 */
export const SessionBookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    therapistName: '',
    sessionDate: '',
    sessionTime: '',
    sessionType: 'individual',
    topic: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  /**
   * Form validation
   */
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.therapistName.trim()) {
      newErrors.therapistName = 'Please select a therapist';
    }
    if (!formData.sessionDate) {
      newErrors.sessionDate = 'Please select a date';
    }
    if (!formData.sessionTime) {
      newErrors.sessionTime = 'Please select a time';
    }
    if (!formData.topic.trim()) {
      newErrors.topic = 'Please enter a topic';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle input change
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
      // Reset form
      setFormData({
        therapistName: '',
        sessionDate: '',
        sessionTime: '',
        sessionType: 'individual',
        topic: '',
        notes: '',
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Therapist Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Select Therapist
        </label>
        <select
          name="therapistName"
          value={formData.therapistName}
          onChange={handleChange}
          className="w-full"
        >
          <option value="">-- Choose a therapist --</option>
          <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
          <option value="Dr. Michael Chen">Dr. Michael Chen</option>
          <option value="Dr. Emma Rodriguez">Dr. Emma Rodriguez</option>
          <option value="Dr. James Wilson">Dr. James Wilson</option>
        </select>
        {errors.therapistName && (
          <p className="text-red-500 text-sm mt-1">{errors.therapistName}</p>
        )}
      </div>

      {/* Session Date */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Session Date
        </label>
        <input
          type="date"
          name="sessionDate"
          value={formData.sessionDate}
          onChange={handleChange}
          className="w-full"
        />
        {errors.sessionDate && (
          <p className="text-red-500 text-sm mt-1">{errors.sessionDate}</p>
        )}
      </div>

      {/* Session Time */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Session Time
        </label>
        <input
          type="time"
          name="sessionTime"
          value={formData.sessionTime}
          onChange={handleChange}
          className="w-full"
        />
        {errors.sessionTime && (
          <p className="text-red-500 text-sm mt-1">{errors.sessionTime}</p>
        )}
      </div>

      {/* Session Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Session Type
        </label>
        <select
          name="sessionType"
          value={formData.sessionType}
          onChange={handleChange}
          className="w-full"
        >
          <option value="individual">Individual Session</option>
          <option value="couple">Couple's Session</option>
          <option value="family">Family Session</option>
          <option value="group">Group Session</option>
        </select>
      </div>

      {/* Topic */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Main Topic
        </label>
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          placeholder="What would you like to discuss?"
          className="w-full"
        />
        {errors.topic && (
          <p className="text-red-500 text-sm mt-1">{errors.topic}</p>
        )}
      </div>

      {/* Additional Notes */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Additional Notes (Optional)
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any additional information..."
          rows="4"
          className="w-full"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary w-full"
      >
        Book Session
      </button>
    </form>
  );
};
