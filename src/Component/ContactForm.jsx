import React, { useState } from 'react';
import './Style.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Perform any client-side validation if needed
    
        // Send a POST request to the server
        try {
          const response = await fetch('https://www.greatfrontend.com/api/questions/contact-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert('Success! Congratulations!');
          } else {
            alert('Failed to submit the form. Please try again.');
          }
        } catch (error) {
          console.error('Error submitting the form:', error);
          alert('An error occurred while submitting the form. Please try again later.');
        }
      };

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />

    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />

    <label htmlFor="message">Message:</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      value={formData.message}
      onChange={handleChange}
      required
    ></textarea>

    <button type="submit">Send</button>
  </form>  
  )
}

export default ContactForm