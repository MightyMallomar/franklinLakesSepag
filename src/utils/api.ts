import axios, { AxiosInstance, AxiosError } from 'axios';
import { mockEvents } from '../mockData/events';
import { mockResources } from '../mockData/resources';
import { shouldUseMockData, getApiDelay, shouldSimulateError } from '../config/mockConfig';

// Create axios instance with default configuration
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     // Handle common errors
//     if (error.response?.status === 401) {
//       // Unauthorized - redirect to login or clear token
//       localStorage.removeItem('authToken');
//       window.location.href = '/login';
//     }
    
//     if (error.response?.status === 403) {
//       // Forbidden
//       console.error('Access denied');
//     }
    
//     if (error.response?.status >= 500) {
//       // Server error
//       console.error('Server error occurred');
//     }
    
//     return Promise.reject(error);
//   }
// );

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Generic API functions
export const apiGet = async <T>(url: string, params?: any): Promise<ApiResponse<T>> => {
  try {
    const response = await api.get<ApiResponse<T>>(url, { params });
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const apiPost = async <T>(url: string, data?: any): Promise<ApiResponse<T>> => {
  try {
    const response = await api.post<ApiResponse<T>>(url, data);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const apiPut = async <T>(url: string, data?: any): Promise<ApiResponse<T>> => {
  try {
    const response = await api.put<ApiResponse<T>>(url, data);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const apiDelete = async <T>(url: string): Promise<ApiResponse<T>> => {
  try {
    const response = await api.delete<ApiResponse<T>>(url);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Error handling
const handleApiError = (error: any): ApiResponse => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiResponse>;
    
    if (axiosError.response?.data) {
      return {
        success: false,
        message: axiosError.response.data.message || 'An error occurred',
        errors: axiosError.response.data.errors || [],
      };
    }
    
    if (axiosError.code === 'ECONNABORTED') {
      return {
        success: false,
        message: 'Request timeout. Please try again.',
      };
    }
    
    if (axiosError.code === 'NETWORK_ERROR') {
      return {
        success: false,
        message: 'Network error. Please check your connection.',
      };
    }
  }
  
  return {
    success: false,
    message: 'An unexpected error occurred.',
  };
};

// Contact form API
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<ApiResponse> => {
  if (shouldUseMockData()) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, getApiDelay('CONTACT_FORM')));
    
    // Simulate success (in real app, this would be sent to server)
    console.log('Contact form submitted:', data);
    
    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.'
    };
  }
  
  // Real API call
  return apiPost('/contact', data);
};

// Newsletter subscription API
export interface NewsletterData {
  email: string;
  firstName?: string;
  lastName?: string;
}

export const subscribeToNewsletter = async (data: NewsletterData): Promise<ApiResponse> => {
  if (shouldUseMockData()) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, getApiDelay('NEWSLETTER')));
    
    // Simulate success (in real app, this would be sent to server)
    console.log('Newsletter subscription:', data);
    
    return {
      success: true,
      message: 'Thank you for subscribing to our newsletter!'
    };
  }
  
  // Real API call
  return apiPost('/newsletter/subscribe', data);
};

// Events API
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  isVirtual: boolean;
  virtualLink?: string;
  registrationRequired: boolean;
  maxAttendees?: number;
  currentAttendees?: number;
  category: string;
  image?: string;
}

export const getEvents = async (): Promise<ApiResponse<Event[]>> => {
  if (shouldUseMockData()) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, getApiDelay('EVENTS')));
    
    // Simulate random errors for testing
    if (shouldSimulateError()) {
      return {
        success: false,
        message: 'Failed to load events. Please try again.'
      };
    }
    
    return {
      success: true,
      data: mockEvents,
      message: 'Events retrieved successfully'
    };
  }
  
  // Real API call
  return apiGet<Event[]>('/events');
};

export const getEventById = async (id: string): Promise<ApiResponse<Event>> => {
  if (shouldUseMockData()) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, getApiDelay('SINGLE_ITEM')));
    
    const event = mockEvents.find(e => e.id === id);
    
    if (event) {
      return {
        success: true,
        data: event,
        message: 'Event retrieved successfully'
      };
    } else {
      return {
        success: false,
        message: 'Event not found'
      };
    }
  }
  
  // Real API call
  return apiGet<Event>(`/events/${id}`);
};

// Resources API
export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'document' | 'link' | 'video';
  url: string;
  fileSize?: string;
  tags: string[];
  createdAt: string;
}

export const getResources = async (category?: string): Promise<ApiResponse<Resource[]>> => {
  if (shouldUseMockData()) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, getApiDelay('RESOURCES')));
    
    let filteredResources = mockResources;
    
    if (category && category !== 'all') {
      filteredResources = mockResources.filter(resource => resource.category === category);
    }
    
    return {
      success: true,
      data: filteredResources,
      message: 'Resources retrieved successfully'
    };
  }
  
  // Real API call
  return apiGet<Resource[]>('/resources', { category });
};

export const getResourceById = async (id: string): Promise<ApiResponse<Resource>> => {
  if (shouldUseMockData()) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, getApiDelay('SINGLE_ITEM')));
    
    const resource = mockResources.find(r => r.id === id);
    
    if (resource) {
      return {
        success: true,
        data: resource,
        message: 'Resource retrieved successfully'
      };
    } else {
      return {
        success: false,
        message: 'Resource not found'
      };
    }
  }
  
  // Real API call
  return apiGet<Resource>(`/resources/${id}`);
};

export default api; 