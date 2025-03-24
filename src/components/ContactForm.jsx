import React, { useState } from 'react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: 'Sending message...' });

    try {
      // Simulated success for demonstration
      setTimeout(() => {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message. We will get back to you soon!'
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 1500);
      
    } catch (error) {
      setFormStatus({
        submitted: true, 
        success: false, 
        message: 'Failed to send message. Please try again or contact us directly.'
      });
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      {formStatus.submitted && (
        <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {formStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4" action="mailto:support@classicsystemsinfotech.ng" method="post" encType="text/plain">
        <input type="hidden" name="_subject" value="New contact form submission" />
        <input type="hidden" name="_next" value={window.location.href} />
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="How can we help you?"
            required
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message here..."
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          disabled={formStatus.submitted && !formStatus.success}
        >
          {formStatus.submitted && !formStatus.success ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}