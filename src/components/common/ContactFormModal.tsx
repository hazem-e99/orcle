import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const ContactFormModal = ({
  isOpen,
  onClose
}: ContactFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {};
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!message) {
      errors.message = 'Message is required';
    }
    return errors;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      onClose();
      // You would typically make an API call here
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center border-b border-gray-200 p-4">
          <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input type="text" name="name" className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`} placeholder="Your name" />
            {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input type="email" name="email" className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`} placeholder="your.email@company.com" />
            {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone (Optional)
            </label>
            <input type="tel" name="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(123) 456-7890" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea name="message" className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 ${formErrors.message ? 'border-red-500' : 'border-gray-300'}`} placeholder="How can we help you?"></textarea>
            {formErrors.message && <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>}
          </div>
          <button type="submit" disabled={isSubmitting} className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>;
};
export default ContactFormModal;