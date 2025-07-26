import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  const boardMembers = [
    {
      name: 'Sarah Johnson',
      role: 'President',
      email: 'president@franklinlakessepag.org',
      description: 'Parent of a child with special needs and advocate for inclusive education.'
    },
    {
      name: 'Michael Chen',
      role: 'Vice President',
      email: 'vicepresident@franklinlakessepag.org',
      description: 'Special education teacher with 15+ years of experience in Franklin Lakes.'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Secretary',
      email: 'secretary@franklinlakessepag.org',
      description: 'Parent advocate and former school board member.'
    },
    {
      name: 'David Thompson',
      role: 'Treasurer',
      email: 'treasurer@franklinlakessepag.org',
      description: 'Financial professional and parent of two children with special needs.'
    }
  ];

  const missionValues = [
    {
      title: 'Advocacy',
      description: 'We advocate for the rights and needs of students with special needs and their families.',
      icon: '🤝'
    },
    {
      title: 'Education',
      description: 'We provide educational resources and information to support families in their journey.',
      icon: '📚'
    },
    {
      title: 'Support',
      description: 'We offer emotional and practical support to families navigating special education.',
      icon: '💙'
    },
    {
      title: 'Community',
      description: 'We build a supportive community where families can connect and share experiences.',
      icon: '👥'
    }
  ];

  return (
    <div className="about">
      <section className="hero-section">
        <div className="container">
          <h1 className="page-title">About Franklin Lakes SEPAG</h1>
          <p className="page-subtitle">
            Supporting families and students with special needs in Franklin Lakes, NJ since 2014
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                Franklin Lakes Special Education Parent Advisory Group (SEPAG) is dedicated to supporting 
                families of students with special needs in our community. We work collaboratively with 
                the Franklin Lakes School District to ensure that every child receives the education and 
                support they deserve.
              </p>
              <p>
                Our organization provides advocacy, education, and support services to families navigating 
                the special education system. We believe that every child has the right to a quality 
                education that meets their unique needs and helps them reach their full potential.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>📚</span>
                <p>Supporting Education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {missionValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Parent Support Groups</h3>
              <p>
                Monthly support group meetings where parents can share experiences, ask questions, 
                and connect with others who understand their journey.
              </p>
            </div>
            <div className="service-item">
              <h3>Educational Workshops</h3>
              <p>
                Regular workshops on topics such as IEP development, transition planning, 
                advocacy strategies, and understanding special education law.
              </p>
            </div>
            <div className="service-item">
              <h3>Resource Library</h3>
              <p>
                Comprehensive collection of books, articles, and online resources related to 
                special education and disability advocacy.
              </p>
            </div>
            <div className="service-item">
              <h3>School District Collaboration</h3>
              <p>
                Working directly with the Franklin Lakes School District to improve special 
                education services and ensure parent voice is heard.
              </p>
            </div>
            <div className="service-item">
              <h3>Individual Advocacy</h3>
              <p>
                One-on-one support for families navigating the special education process, 
                including IEP meetings and dispute resolution.
              </p>
            </div>
            <div className="service-item">
              <h3>Community Outreach</h3>
              <p>
                Raising awareness about special education issues and promoting inclusion 
                throughout the Franklin Lakes community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-tertiary">
        <div className="container">
          <h2 className="section-title">Board of Directors</h2>
          <div className="board-grid">
            {boardMembers.map((member, index) => (
              <div key={index} className="board-member">
                <div className="member-avatar">
                  <span>{member.name.charAt(0)}</span>
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                <a href={`mailto:${member.email}`} className="member-email">
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2>Get Involved</h2>
            <p>
              Join our community and help make a difference in the lives of students with special needs 
              and their families in Franklin Lakes.
            </p>
            <div className="cta-buttons">
              <Link to="/events" className="btn btn-primary">
                Attend Our Events
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 