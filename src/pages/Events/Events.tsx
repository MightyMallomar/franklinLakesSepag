import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../../components/EventCard/EventCard.tsx';
import { getEvents, Event } from '../../utils/api.ts';
import './Events.css';

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const result = await getEvents();
        if (result.success && result.data) {
          setEvents(result.data);
        } else {
          setError(result.message || 'Failed to load events');
        }
      } catch (err) {
        setError('An error occurred while loading events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true;
    if (filter === 'virtual') return event.isVirtual;
    if (filter === 'in-person') return !event.isVirtual;
    return true;
  });

  const upcomingEvents = filteredEvents.filter(event => 
    new Date(event.date) >= new Date()
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = filteredEvents.filter(event => 
    new Date(event.date) < new Date()
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (loading) {
    return (
      <div className="events">
        <div className="container">
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Loading events...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="events">
        <div className="container">
          <div className="error-message">
            <p>{error}</p>
            <button onClick={() => window.location.reload()} className="btn btn-primary">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="events">
      <section className="hero-section">
        <div className="container">
          <h1 className="page-title">Events & Workshops</h1>
          <p className="page-subtitle">
            Join us for informative workshops, support groups, and community events
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="events-header">
            <div className="events-filters">
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Events
              </button>
              <button
                className={`filter-btn ${filter === 'virtual' ? 'active' : ''}`}
                onClick={() => setFilter('virtual')}
              >
                Virtual Events
              </button>
              <button
                className={`filter-btn ${filter === 'in-person' ? 'active' : ''}`}
                onClick={() => setFilter('in-person')}
              >
                In-Person Events
              </button>
            </div>
          </div>

          {upcomingEvents.length > 0 && (
            <div className="events-section">
              <h2>Upcoming Events</h2>
              <div className="events-grid">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {upcomingEvents.length === 0 && (
            <div className="no-events">
              <h2>No Upcoming Events</h2>
              <p>Check back soon for new events and workshops!</p>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          )}

          {pastEvents.length > 0 && (
            <div className="events-section">
              <h2>Past Events</h2>
              <div className="events-grid">
                {pastEvents.slice(0, 6).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
              {pastEvents.length > 6 && (
                <div className="text-center mt-8">
                  <button className="btn btn-outline">
                    View More Past Events
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <div className="cta-section">
            <h2>Can't Find What You're Looking For?</h2>
            <p>
              We're always planning new events and workshops. Let us know what topics 
              you'd like to see covered or if you'd like to suggest an event.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Suggest an Event
              </Link>
              <Link to="/resources" className="btn btn-outline">
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events; 