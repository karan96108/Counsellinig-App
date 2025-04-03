export const GOOGLE_SHEETS_API_URL = import.meta.env.VITE_GOOGLE_SHEETS_API_URL;

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  programInterest: string;
  message: string;
  timestamp: string;
}

export const submitToGoogleSheets = async (formData: ContactFormData) => {
  try {
    // Create form data
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    const response = await fetch(GOOGLE_SHEETS_API_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: form
    });

    // Since we're using no-cors mode, we can't check response.ok
    // Instead, we'll assume success if we get here without an error
    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}; 