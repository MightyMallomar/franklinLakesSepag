import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validateName, validateEmail, validateMessage } from '../../utils/validation.ts';
import { submitContactForm } from '../../utils/api.ts';
import './Contact.css';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitContactForm(data);
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
        reset();
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateNameField = (value: string) => {
    const validation = validateName(value);
    return validation.isValid || validation.errors[0];
  };

  const validateEmailField = (value: string) => {
    const validation = validateEmail(value);
    return validation.isValid || validation.errors[0];
  };

  const validateMessageField = (value: string) => {
    const validation = validateMessage(value);
    return validation.isValid || validation.errors[0];
  };

  return (
    <div className="contact">
      <section className="hero-section">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with us for support, questions, or to learn more about our services
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                We're here to help! Whether you have questions about special education services, 
                want to join our community, or need support, we'd love to hear from you.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <a href="mailto:info@franklinlakessepag.org">info@franklinlakessepag.org</a>
                    <p>We typically respond within 24-48 hours</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h3>Phone</h3>
                    <a href="tel:+12015551234">(201) 555-1234</a>
                    <p>Available Monday-Friday, 9 AM - 5 PM</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h3>Address</h3>
                    <p>Franklin Lakes, NJ 07417</p>
                    <p>Meetings held at various locations</p>
                  </div>
                </div>
              </div>

              <div className="contact-note">
                <h3>Before You Contact Us</h3>
                <ul>
                  <li>Check our <a href="/resources">Resources</a> page for common questions</li>
                  <li>Review our <a href="/events">Events</a> calendar for upcoming workshops</li>
                  <li>Join our <a href="/about">About</a> page to learn more about our mission</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', {
                        required: 'Name is required',
                        validate: validateNameField
                      })}
                      className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name.message}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        validate: validateEmailField
                      })}
                      className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className="form-input"
                      placeholder="(201) 555-1234"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      id="subject"
                      type="text"
                      {...register('subject', { required: 'Subject is required' })}
                      className={`form-input ${errors.subject ? 'form-input-error' : ''}`}
                      placeholder="What is this about?"
                    />
                    {errors.subject && (
                      <span className="error-message">{errors.subject.message}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', {
                      required: 'Message is required',
                      validate: validateMessageField
                    })}
                    className={`form-input ${errors.message ? 'form-input-error' : ''}`}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <span className="error-message">{errors.message.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    {submitMessage}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 