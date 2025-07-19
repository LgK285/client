import { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import axios from "axios";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contacts");
      setContacts(res.data);
    } catch (err) {
      console.error("Failed to fetch contacts", err);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      fetchContacts(); // Reload
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      {contacts.length === 0 ? (
        <p className="text-gray-500">No contacts found.</p>
      ) : (
        contacts.map((c) => (
          <ContactCard key={c._id} contact={c} onDelete={deleteContact} />
        ))
      )}
    </div>
  );
};

export default ContactList;
