import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validateEmail } from '../../utils/validation.ts';
import { subscribeToNewsletter } from '../../utils/api.ts';
import './NewsletterSignup.css';

interface NewsletterFormData {
  email: string;
  firstName?: string;
  lastName?: string;
}

const NewsletterSignup: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await subscribeToNewsletter(data);
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for subscribing! You\'ll receive our newsletter soon.');
        reset();
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateEmailField = (value: string) => {
    const validation = validateEmail(value);
    return validation.isValid || validation.errors[0];
  };

  return (
    <div className="newsletter-signup">
      <form onSubmit={handleSubmit(onSubmit)} className="newsletter-form">
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name (Optional)"
              {...register('firstName')}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name (Optional)"
              {...register('lastName')}
              className="form-input"
            />
          </div>
        </div>
        
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address *"
            {...register('email', {
              required: 'Email is required',
              validate: validateEmailField
            })}
            className={`form-input ${errors.email ? 'form-input-error' : ''}`}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-full"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
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

        <p className="newsletter-disclaimer">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};

export default NewsletterSignup; 