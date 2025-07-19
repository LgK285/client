import React from 'react';
import { Link } from 'react-router-dom';

const ContactCard = ({ contact, onDelete }) => {
  return (
    <div className="contact-card">
      <div className="card-header">
        <h3>{contact.name}</h3>
        <span className="card-group">{contact.group || "N/A"}</span>
      </div>
      <div className="card-body">
        <p><strong>Email:</strong> {contact.email}</p>
        {contact.phone && <p><strong>Phone:</strong> {contact.phone}</p>}
      </div>
      <div className="card-actions">
        <Link to={`/edit/${contact._id}`} className="edit-btn">Edit</Link>
        <button onClick={() => onDelete(contact._id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default ContactCard;
