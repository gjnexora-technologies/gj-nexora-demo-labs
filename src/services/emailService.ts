import emailjs from '@emailjs/browser';

export interface EnquiryEmailParams {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  honeypot?: string; // Hidden spam honeypot
}

export interface SendEmailResult {
  success: boolean;
  message: string;
  missingConfig?: boolean;
}

/**
 * Sends an automatic website enquiry to gjnexoratech@gmail.com via EmailJS.
 */
export async function sendEnquiryEmail(params: EnquiryEmailParams): Promise<SendEmailResult> {
  // 1. Basic Spam Honeypot Protection
  if (params.honeypot && params.honeypot.trim().length > 0) {
    // Silently reject spam submissions
    return {
      success: true,
      message: 'Enquiry received.',
    };
  }

  // 2. Validate environment configuration
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      '[EmailJS] Configuration missing. Please define VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env / Vercel Environment Variables.'
    );
    return {
      success: false,
      missingConfig: true,
      message: 'We couldn’t send your enquiry right now. Email service configuration is being updated. Please try again in a moment or contact us via WhatsApp.',
    };
  }

  // 3. Prepare clean template parameters
  const templateParams = {
    name: params.name.trim(),
    email: params.email.trim(),
    phone: params.phone?.trim() || 'Not provided',
    service: params.service?.trim() || 'General Inquiry',
    message: params.message.trim(),
    website: 'https://gjnexoratech.in',
    submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

    if (response.status === 200 || response.text === 'OK') {
      return {
        success: true,
        message: 'Enquiry sent successfully.',
      };
    } else {
      return {
        success: false,
        message: 'We couldn’t send your enquiry right now. Please try again in a moment.',
      };
    }
  } catch (error) {
    console.error('[EmailJS] Submission failed:', error);
    return {
      success: false,
      message: 'We couldn’t send your enquiry right now. Please try again in a moment.',
    };
  }
}
