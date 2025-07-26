export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | undefined;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateField = (value: any, rules: ValidationRule): ValidationResult => {
  const errors: string[] = [];

  // Required validation
  if (rules.required && (!value || value.trim() === '')) {
    errors.push('This field is required');
  }

  // Skip other validations if value is empty and not required
  if (!value || value.trim() === '') {
    return { isValid: errors.length === 0, errors };
  }

  // Min length validation
  if (rules.minLength && value.length < rules.minLength) {
    errors.push(`Minimum length is ${rules.minLength} characters`);
  }

  // Max length validation
  if (rules.maxLength && value.length > rules.maxLength) {
    errors.push(`Maximum length is ${rules.maxLength} characters`);
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(value)) {
    errors.push('Invalid format');
  }

  // Custom validation
  if (rules.custom) {
    const customError = rules.custom(value);
    if (customError) {
      errors.push(customError);
    }
  }

  return { isValid: errors.length === 0, errors };
};

export const validateEmail = (email: string): ValidationResult => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validateField(email, {
    required: true,
    pattern: emailPattern,
    custom: (value) => {
      if (!emailPattern.test(value)) {
        return 'Please enter a valid email address';
      }
      return undefined;
    }
  });
};

export const validatePhone = (phone: string): ValidationResult => {
  const phonePattern = /^[+]?[1-9][\d]{0,15}$/;
  return validateField(phone, {
    pattern: phonePattern,
    custom: (value) => {
      if (value && !phonePattern.test(value.replace(/[\s\-()]/g, ''))) {
        return 'Please enter a valid phone number';
      }
      return undefined;
    }
  });
};

export const validateRequired = (value: string): ValidationResult => {
  return validateField(value, { required: true });
};

export const validateName = (name: string): ValidationResult => {
  return validateField(name, {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s\-']+$/,
    custom: (value) => {
      if (!/^[a-zA-Z\s\-']+$/.test(value)) {
        return 'Name can only contain letters, spaces, hyphens, and apostrophes';
      }
      return undefined;
    }
  });
};

export const validateMessage = (message: string): ValidationResult => {
  return validateField(message, {
    required: true,
    minLength: 10,
    maxLength: 1000
  });
};

export const validateForm = (data: Record<string, any>, rules: Record<string, ValidationRule>): Record<string, ValidationResult> => {
  const results: Record<string, ValidationResult> = {};

  Object.keys(rules).forEach(fieldName => {
    results[fieldName] = validateField(data[fieldName] || '', rules[fieldName]);
  });

  return results;
};

export const isFormValid = (validationResults: Record<string, ValidationResult>): boolean => {
  return Object.keys(validationResults).every(key => validationResults[key].isValid);
};

export const getFormErrors = (validationResults: Record<string, ValidationResult>): string[] => {
  const errors: string[] = [];
  Object.keys(validationResults).forEach(key => {
    errors.push(...validationResults[key].errors);
  });
  return errors;
}; 