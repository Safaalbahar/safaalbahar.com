export const FormConstants = {
  SALES_EMAIL: 'sales@safaalbahar.com',
  COMPANY_WHATSAPP_NUMBER: '966559977206',
  WHATSAPP_BASE_URL: 'https://wa.me/966559977206',
  COMPANY_PROFILE_URL: '/assets/safa-al-bahar-company-profile.pdf',
  
  VALIDATION_RULES: {
    required: (value) => {
      if (typeof value === 'string') return value.trim().length > 0;
      return value !== null && value !== undefined;
    },
    email: (value) => {
      // RFC 5322 basic compliant regex
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
    },
    phone: (value) => {
      if (!value) return true; // Optional by default unless 'required' is also checked
      return /^\+?[0-9\s\-()]{7,20}$/.test(value);
    }
  }
};
