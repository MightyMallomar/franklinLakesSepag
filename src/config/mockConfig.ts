// Configuration for mock data usage
export const MOCK_CONFIG = {
  // Set to true to use mock data, false to use real API calls
  USE_MOCK_DATA: true,
  
  // Simulate API delays (in milliseconds)
  API_DELAYS: {
    EVENTS: 500,
    RESOURCES: 400,
    CONTACT_FORM: 1000,
    NEWSLETTER: 800,
    SINGLE_ITEM: 300
  },
  
  // Mock data settings
  MOCK_SETTINGS: {
    // Enable/disable specific mock features
    EVENTS: true,
    RESOURCES: true,
    CONTACT_FORM: true,
    NEWSLETTER: true,
    
    // Simulate errors (for testing)
    SIMULATE_ERRORS: false,
    ERROR_RATE: 0.1 // 10% chance of error
  }
};

// Helper function to check if mock data should be used
export const shouldUseMockData = (): boolean => {
  return MOCK_CONFIG.USE_MOCK_DATA;
};

// Helper function to get API delay
export const getApiDelay = (type: keyof typeof MOCK_CONFIG.API_DELAYS): number => {
  return MOCK_CONFIG.API_DELAYS[type];
};

// Helper function to simulate random errors
export const shouldSimulateError = (): boolean => {
  if (!MOCK_CONFIG.MOCK_SETTINGS.SIMULATE_ERRORS) return false;
  return Math.random() < MOCK_CONFIG.MOCK_SETTINGS.ERROR_RATE;
}; 