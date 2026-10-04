import React, { useState, useEffect } from 'react';
import { X, Send, Mail, Building, User, FileText, CheckCircle2, MessageCircle, AlertCircle, Loader2 } from 'lucide-react';
import { sendEnquiryEmail } from '../../services/emailService';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialContext = '',
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialContext) {
      setMessage(`Hi GJ Nexora team, I am interested in exploring: ${initialContext}\n\nOur current requirements are: `);
    } else {
      setMessage('');
    }
    setSubmitted(false);
    setErrorMessage(null);
  }, [initialContext, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateEmail = (val: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!name.trim() || name.trim().length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!email.trim() || !validateEmail(email)) {
      setErrorMessage('Please enter a valid business email.');
      return;
    }

    if (!message.trim() || message.trim().length < 5) {
      setErrorMessage('Please describe what you need built.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendEnquiryEmail({
        name,
        email,
        phone: company ? `Company: ${company}` : 'Not provided',
        service: initialContext || 'Custom Software Inquiry',
        message: company ? `[Company: ${company}]\n\n${message}` : message,
        honeypot,
      });

      if (result.success) {
        setSubmitted(true);
        setErrorMessage(null);
        setName('');
        setCompany('');
        setEmail('');
        setMessage('');
        setHoneypot('');
      } else {
        setErrorMessage(result.message || 'We couldn’t send your enquiry right now. Please try again in a moment.');
      }
    } catch (err) {
      console.error('[ContactModal] Submission error:', err);
      setErrorMessage('We couldn’t send your enquiry right now. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-2.5 py-0.5 rounded-md border border-indigo-800/60">
              DIRECT ENQUIRY
            </div>
            <h2 id="contact-modal-title" className="text-xl font-bold text-white mt-1.5 tracking-tight">
              Talk to GJ Nexora Technologies
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Discuss custom business software and engineering architecture.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content / Form */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A]">
              ✓ Enquiry Sent Successfully
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Enquiry sent successfully. We'll get back to you soon.
            </p>

            <div className="pt-3">
              <button
                onClick={onClose}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-left" noValidate>
            {/* Friendly Error Feedback */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2 animate-fade-in" role="alert">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Spam Honeypot (Hidden) */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div>
              <label
                htmlFor="modal-name"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 cursor-pointer"
              >
                Your Name <span className="text-indigo-600">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  id="modal-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alexander Vance"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="modal-company"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 cursor-pointer"
              >
                Company / Organization
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  id="modal-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Nova Enterprises"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="modal-email"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 cursor-pointer"
              >
                Business Email <span className="text-indigo-600">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  id="modal-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alexander@company.com"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="modal-message"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 cursor-pointer"
              >
                What do you need built? <span className="text-indigo-600">*</span>
              </label>
              <div className="relative">
                <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <textarea
                  id="modal-message"
                  name="message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your workflow, required platform capabilities, or desired project scope..."
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all resize-none"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <a
                href="https://wa.me/918438749286"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 transition-all shadow-md shadow-indigo-600/20 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
