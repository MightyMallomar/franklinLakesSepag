# Mock Data System

This directory contains mock data and configuration for the Franklin Lakes SEPAG website. The mock data system allows the website to function without a backend API while providing realistic data for development and testing.

## Structure

```
src/mockData/
├── events.ts          # Mock events data
├── resources.ts       # Mock resources data
├── index.ts          # Export file for easy importing
└── README.md         # This file

src/config/
└── mockConfig.ts     # Configuration for mock data usage
```

## Files

### `events.ts`
Contains mock event data including:
- Parent support group meetings
- IEP workshops
- Transition planning seminars
- Educational workshops
- Legal rights training
- Technology workshops
- Community events

Each event includes:
- Title, description, date, time, location
- Virtual/in-person status
- Registration requirements
- Category and attendance information

### `resources.ts`
Contains mock resource data including:
- Educational guides (IEP, ADHD, Learning Disabilities)
- Legal resources (Rights, Section 504)
- Community directories
- Support group information
- External links to relevant organizations
- Video resources

Each resource includes:
- Title, description, category
- Type (document, link, video)
- File size (for documents)
- Tags for easy filtering
- Creation date

### `index.ts`
Export file that makes it easy to import all mock data:
```typescript
import { mockEvents, mockResources } from '../mockData';
```

### `mockConfig.ts`
Configuration file that controls:
- Whether to use mock data or real API calls
- API delay simulation times
- Error simulation settings
- Feature toggles for different mock functions

## Usage

### Basic Usage
The mock data is automatically used when `USE_MOCK_DATA` is set to `true` in `mockConfig.ts`. The API functions in `src/utils/api.ts` will automatically use mock data instead of making real HTTP requests.

### Switching Between Mock and Real API
To switch between mock data and real API calls:

1. **Use Mock Data (Development):**
   ```typescript
   // In src/config/mockConfig.ts
   export const MOCK_CONFIG = {
     USE_MOCK_DATA: true,
     // ... other settings
   };
   ```

2. **Use Real API (Production):**
   ```typescript
   // In src/config/mockConfig.ts
   export const MOCK_CONFIG = {
     USE_MOCK_DATA: false,
     // ... other settings
   };
   ```

### Customizing Mock Data
To add or modify mock data:

1. **Add New Events:**
   ```typescript
   // In src/mockData/events.ts
   export const mockEvents: Event[] = [
     // ... existing events
     {
       id: 'new-event-id',
       title: 'New Event Title',
       description: 'Event description...',
       date: '2024-05-01',
       time: '7:00 PM',
       location: 'Franklin Lakes Community Center',
       isVirtual: false,
       registrationRequired: false,
       category: 'Workshop',
       currentAttendees: 0,
       maxAttendees: 25
     }
   ];
   ```

2. **Add New Resources:**
   ```typescript
   // In src/mockData/resources.ts
   export const mockResources: Resource[] = [
     // ... existing resources
     {
       id: 'new-resource-id',
       title: 'New Resource Title',
       description: 'Resource description...',
       category: 'education',
       type: 'document',
       url: '/resources/new-resource.pdf',
       fileSize: '1.5 MB',
       tags: ['New', 'Education', 'Guide'],
       createdAt: '2024-03-20'
     }
   ];
   ```

### API Delay Simulation
The mock system simulates real API delays to provide a realistic user experience:

```typescript
// In src/config/mockConfig.ts
API_DELAYS: {
  EVENTS: 500,        // 500ms for events list
  RESOURCES: 400,     // 400ms for resources list
  CONTACT_FORM: 1000, // 1000ms for form submission
  NEWSLETTER: 800,    // 800ms for newsletter signup
  SINGLE_ITEM: 300    // 300ms for single item fetch
}
```

### Error Simulation
For testing error handling, you can enable error simulation:

```typescript
// In src/config/mockConfig.ts
MOCK_SETTINGS: {
  SIMULATE_ERRORS: true,
  ERROR_RATE: 0.1 // 10% chance of error
}
```

## Benefits

1. **Development Without Backend:** The website can be developed and tested without a backend API
2. **Consistent Data:** Mock data provides consistent, predictable data for testing
3. **Realistic Experience:** API delays and error handling simulate real-world conditions
4. **Easy Switching:** Simple configuration to switch between mock and real data
5. **Comprehensive Coverage:** Mock data covers all major features of the website

## Integration with API Functions

The mock data integrates seamlessly with the existing API functions in `src/utils/api.ts`:

- `getEvents()` - Returns mock events data
- `getEventById(id)` - Returns specific mock event
- `getResources(category?)` - Returns mock resources with optional filtering
- `getResourceById(id)` - Returns specific mock resource
- `submitContactForm(data)` - Simulates form submission
- `subscribeToNewsletter(data)` - Simulates newsletter subscription

All functions maintain the same interface whether using mock data or real API calls, making the transition seamless. 