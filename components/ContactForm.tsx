import React, { useState } from 'react';
import { Send, Loader2, AlertCircle, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    
    // Clear error state when user starts typing to encourage retry
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email address.";
    if (!formData.message.trim()) return "Message cannot be empty.";
    if (formData.message.length < 10) return "Message is too short. Please provide more details.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Simulate API call
      // In a real application, replace this with your actual API endpoint
      // const response = await fetch('/api/contact', { ... });
      
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate a success response
          resolve(true);
          // Uncomment to test server error:
          // reject(new Error("Unable to connect to the server. Please try again later."));
        }, 1500);
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border focus:ring-2 focus:border-transparent outline-none transition-all dark:text-white ${
            status === 'error' && !formData.name 
              ? 'border-red-300 focus:ring-red-200 dark:border-red-800' 
              : 'border-gray-200 dark:border-white/10 focus:ring-primary'
          }`}
          placeholder="Your Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border focus:ring-2 focus:border-transparent outline-none transition-all dark:text-white ${
            status === 'error' && (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
              ? 'border-red-300 focus:ring-red-200 dark:border-red-800' 
              : 'border-gray-200 dark:border-white/10 focus:ring-primary'
          }`}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border focus:ring-2 focus:border-transparent outline-none transition-all dark:text-white ${
            status === 'error' && !formData.message 
              ? 'border-red-300 focus:ring-red-200 dark:border-red-800' 
              : 'border-gray-200 dark:border-white/10 focus:ring-primary'
          }`}
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-3 animate-fade-in">
          <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
          <p className="text-red-600 dark:text-red-400 text-sm font-medium">{errorMessage}</p>
        </div>
      )}

      {/* Success Message */}
      {status === 'success' && (
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-start gap-3 animate-fade-in">
          <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
          <p className="text-green-600 dark:text-green-400 text-sm font-medium">
            Message sent successfully! I'll get back to you as soon as possible.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={`w-full flex items-center justify-center px-8 py-3 text-base font-semibold text-white rounded-lg transition-all ${
          status === 'success' 
            ? 'bg-green-600 hover:bg-green-700' 
            : 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30'
        } disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="animate-spin mr-2" size={20} />
            Sending...
          </>
        ) : status === 'success' ? (
          'Message Sent!'
        ) : (
          <>
            Send Message
            <Send className="ml-2" size={18} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;