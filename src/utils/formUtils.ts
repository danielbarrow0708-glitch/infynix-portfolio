// Form submission utility functions

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Simulate API call - replace with actual endpoint
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the data to your backend
    // Example: const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    console.log('Form submitted:', formData);
    
    // For now, we'll simulate a successful submission
    return {
      success: true,
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.'
    };
    
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again or contact us directly.'
    };
  }
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};
