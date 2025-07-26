import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  isVirtual: boolean;
  registrationRequired: boolean;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="event-card">
      <div className="event-header">
        <div className="event-date">
          <span className="event-day">{new Date(event.date).getDate()}</span>
          <span className="event-month">
            {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
          </span>
        </div>
        <div className="event-badges">
          {event.isVirtual && (
            <span className="badge badge-virtual">Virtual</span>
          )}
          {event.registrationRequired && (
            <span className="badge badge-registration">Registration Required</span>
          )}
        </div>
      </div>
      
      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.description}</p>
        
        <div className="event-details">
          <div className="event-detail">
            <span className="detail-icon">🕒</span>
            <span>{event.time}</span>
          </div>
          <div className="event-detail">
            <span className="detail-icon">📍</span>
            <span>{event.location}</span>
          </div>
          <div className="event-detail">
            <span className="detail-icon">📅</span>
            <span>{formatDate(event.date)}</span>
          </div>
        </div>
        
        <Link to={`/events/${event.id}`} className="event-link">
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default EventCard; 