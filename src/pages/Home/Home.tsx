import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection/HeroSection.tsx';
import FeatureCard from '../../components/FeatureCard/FeatureCard.tsx';
import EventCard from '../../components/EventCard/EventCard.tsx';
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup.tsx';
import './Home.css';

const Home: React.FC = () => {
  const features = [
    {
      icon: '🤝',
      title: 'Advocacy Support',
      description: 'We advocate for the rights and needs of students with special needs and their families in Franklin Lakes.',
      link: '/about'
    },
    {
      icon: '📚',
      title: 'Educational Resources',
      description: 'Access comprehensive resources, workshops, and information to support your child\'s educational journey.',
      link: '/resources'
    },
    {
      icon: '👥',
      title: 'Community Connection',
      description: 'Connect with other families, share experiences, and build a supportive network in our community.',
      link: '/events'
    },
    {
      icon: '📞',
      title: 'Direct Support',
      description: 'Get personalized guidance and support from experienced parents and educational professionals.',
      link: '/contact'
    }
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'Parent Support Group Meeting',
      date: '2024-02-15',
      time: '7:00 PM',
      location: 'Franklin Lakes Public Library',
      description: 'Monthly support group for parents of children with special needs.',
      isVirtual: false,
      registrationRequired: false
    },
    {
      id: '2',
      title: 'IEP Workshop: Understanding Your Rights',
      date: '2024-02-22',
      time: '6:30 PM',
      location: 'Virtual Meeting',
      description: 'Learn how to effectively participate in your child\'s IEP process.',
      isVirtual: true,
      registrationRequired: true
    },
    {
      id: '3',
      title: 'Transition Planning Seminar',
      date: '2024-03-01',
      time: '7:00 PM',
      location: 'Franklin Lakes Community Center',
      description: 'Planning for your child\'s transition from school to adult life.',
      isVirtual: false,
      registrationRequired: true
    }
  ];

  return (
    <div className="home">
      <HeroSection />
      
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="section-title">How We Support Families</h2>
          <p className="section-subtitle">
            Franklin Lakes SEPAG provides comprehensive support to families navigating special education services.
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Join us for informative workshops, support groups, and community events.
          </p>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/events" className="btn btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-tertiary">
        <div className="container">
          <div className="cta-content">
            <h2 className="section-title">Join Our Community</h2>
            <p className="section-subtitle">
              Become a member of Franklin Lakes SEPAG and connect with families who understand your journey.
            </p>
            <div className="cta-buttons">
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="newsletter-section">
            <h2 className="section-title">Stay Connected</h2>
            <p className="section-subtitle">
              Subscribe to our newsletter for the latest updates, resources, and event announcements.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 