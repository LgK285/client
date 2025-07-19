import React, { useState, useEffect } from 'react';

const ContactForm = ({ initialData, onSubmit }) => {
  const [form, setForm] = useState(initialData);

  useEffect(() => {
    setForm(initialData);
  }, [initialData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label className="form-label">Name *</label>
      <input className="form-input" name="name" value={form.name} onChange={handleChange} required placeholder="Name" />
      <label className="form-label">Email *</label>
      <input className="form-input" name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" />
      <label className="form-label">Phone</label>
      <input className="form-input" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
      <label className="form-label">Group</label>
      <select className="form-select" name="group" value={form.group} onChange={handleChange}>
        <option value="">Select Group</option>
        <option value="Friends">Friends</option>
        <option value="Work">Work</option>
        <option value="Family">Family</option>
      </select>
      <button type="submit" className="form-btn">Save</button>
    </form>
  );
};

export default ContactForm;
