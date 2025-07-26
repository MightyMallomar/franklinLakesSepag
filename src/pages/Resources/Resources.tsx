import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getResources, Resource } from '../../utils/api.ts';
import './Resources.css';

const Resources: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'advocacy', name: 'Advocacy' },
    { id: 'education', name: 'Education' },
    { id: 'legal', name: 'Legal Resources' },
    { id: 'support', name: 'Support Groups' },
    { id: 'community', name: 'Community' }
  ];

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true);
        const result = await getResources();
        if (result.success && result.data) {
          setResources(result.data);
        } else {
          setError(result.message || 'Failed to load resources');
        }
      } catch (err) {
        setError('An error occurred while loading resources');
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const filteredResources = resources.filter(resource => 
    selectedCategory === 'all' || resource.category === selectedCategory
  );

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'document': return '📄';
      case 'link': return '🔗';
      case 'video': return '🎥';
      default: return '📄';
    }
  };

  if (loading) {
    return (
      <div className="resources">
        <div className="container">
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Loading resources...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="resources">
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
    <div className="resources">
      <section className="hero-section">
        <div className="container">
          <h1 className="page-title">Resources</h1>
          <p className="page-subtitle">
            Comprehensive resources to support your special education journey
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="resources-header">
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="resources-grid">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="resource-card">
                <div className="resource-header">
                  <span className="resource-icon">{getResourceIcon(resource.type)}</span>
                  <span className="resource-type">{resource.type}</span>
                </div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <div className="resource-meta">
                  <span className="resource-category">{resource.category}</span>
                  {resource.fileSize && (
                    <span className="resource-size">{resource.fileSize}</span>
                  )}
                </div>
                <div className="resource-tags">
                  {resource.tags.map((tag, index) => (
                    <span key={index} className="resource-tag">{tag}</span>
                  ))}
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  View Resource →
                </a>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="no-resources">
              <h2>No Resources Found</h2>
              <p>No resources available in this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <div className="cta-section">
            <h2>Need More Specific Information?</h2>
            <p>
              Can't find what you're looking for? Contact us for personalized assistance 
              or to suggest additional resources.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/events" className="btn btn-outline">
                Attend a Workshop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources; 