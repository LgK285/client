import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import API from '../api';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    API.get(`/${id}`).then(res => setContact(res.data));
  }, [id]);

  const handleSubmit = async form => {
    await API.put(`/${id}`, form);
    navigate("/");
  };

  if (!contact) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2 style={{margin:0}}>Edit Friend</h2>
      </header>
      <div style={{maxWidth:'400px',margin:'0 auto'}}>
        <ContactForm initialData={contact} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Edit;
