import React from 'react';
import ContactForm from '../components/ContactForm';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = async form => {
    try {
      await API.post("/", form); // Gửi dữ liệu lên server
      navigate("/"); // Redirect về Home
    } catch (err) {
      console.error("Failed to create contact", err);
      alert("Failed to create contact");
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2 style={{margin:0}}>Add New Friend</h2>
      </header>
      <div style={{maxWidth:'400px',margin:'0 auto'}}>
        <ContactForm
          initialData={{ name: '', email: '', phone: '', group: '' }}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Create;
