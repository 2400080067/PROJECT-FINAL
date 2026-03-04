import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * HomePage - Landing page with mental health awareness
 */
export const HomePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Your Mental Health Matters
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            A safe space to seek support, connect with others, and prioritize your mental well-being.
            You're not alone in this journey.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate('/register')}
                  className="btn btn-primary px-8 py-3"
                >
                  Get Started
                </button>
                <button
                  onClick={() => navigate('/login')}
                  className="btn btn-secondary px-8 py-3"
                >
                  Sign In
                </button>
              </>
            ) : (
              <button
                onClick={() =>
                  navigate(
                      user?.role === 'student'
                        ? '/student/dashboard'
                        : '/admin/dashboard'
                    )
                }
                className="btn btn-primary px-8 py-3"
              >
                Go to Dashboard
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Platform?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Your privacy is our priority. All conversations are confidential and encrypted.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Support</h3>
              <p className="text-gray-600">
                Connect with licensed therapists and counselors who care about your well-being.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Community Support</h3>
              <p className="text-gray-600">
                Join support groups and forums to connect with others on similar journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Awareness Section */}
      <section className="bg-blue-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Understanding Mental Health
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Awareness Card 1 */}
            <div className="card">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">
                😊 Mental Health is Self-Care
              </h3>
              <p className="text-gray-700 mb-4">
                Mental health is just as important as physical health. Taking care of your mental
                well-being is an act of self-love and responsibility.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Practice mindfulness and meditation</li>
                <li>✓ Get regular exercise</li>
                <li>✓ Maintain healthy sleep patterns</li>
                <li>✓ Connect with loved ones</li>
              </ul>
            </div>

            {/* Awareness Card 2 */}
            <div className="card">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">
                🌟 Seeking Help is a Sign of Strength
              </h3>
              <p className="text-gray-700 mb-4">
                There's no shame in reaching out for help. In fact, it's one of the bravest things
                you can do for yourself.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Break the stigma around mental health</li>
                <li>✓ Talk openly about your struggles</li>
                <li>✓ Support others on their journey</li>
                <li>✓ Remember: You're not alone</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Making a Difference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="card">
              <p className="text-4xl font-bold text-purple-600 mb-2">5000+</p>
              <p className="text-gray-700">Students Supported</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-purple-600 mb-2">50+</p>
              <p className="text-gray-700">Professional Therapists</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-purple-600 mb-2">20+</p>
              <p className="text-gray-700">Support Groups</p>
            </div>
            <div className="card">
              <p className="text-4xl font-bold text-purple-600 mb-2">24/7</p>
              <p className="text-gray-700">Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Prioritize Your Mental Health?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of students taking control of their mental well-being today.
          </p>
          {!isAuthenticated ? (
            <button
              onClick={() => navigate('/register')}
              className="btn btn-primary px-8 py-3"
            >
              Create Your Account Today
            </button>
          ) : (
            <button
              onClick={() =>
                navigate(
                  user?.role === 'student'
                    ? '/student/dashboard'
                    : '/admin/dashboard'
                )
              }
              className="btn btn-primary px-8 py-3"
            >
              Explore Now
            </button>
          )}
        </div>
      </section>
    </div>
  );
};
