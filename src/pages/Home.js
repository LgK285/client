import React, { useEffect, useState } from 'react';
import API from '../api';
import ContactCard from '../components/ContactCard';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [group, setGroup] = useState('');
  const [sort, setSort] = useState('asc');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await API.get(`?search=${search}&group=${group}&sort=${sort}`);
        setContacts(res.data);
      } catch (err) {
        console.error('Failed to fetch contacts:', err);
      }
    };

    fetchContacts();
  }, [search, group, sort]);

  const handleDelete = async id => {
    if (window.confirm("Are you sure?")) {
      try {
        await API.delete(`/${id}`);
        // Refetch after delete
        const res = await API.get(`?search=${search}&group=${group}&sort=${sort}`);
        setContacts(res.data);
      } catch (err) {
        console.error('Failed to delete contact:', err);
      }
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Contact Manager</h1>
        <Link to="/create" className="add-btn">+ Add Friend</Link>
      </header>
      <div className="dashboard-controls">
        <input
          className="search-input"
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className="select-group" value={group} onChange={e => setGroup(e.target.value)}>
          <option value="">All Groups</option>
          <option value="Friends">Friends</option>
          <option value="Work">Work</option>
          <option value="Family">Family</option>
        </select>
        <select className="select-sort" value={sort} onChange={e => setSort(e.target.value)}>
          <option value="asc">Sort: A-Z</option>
          <option value="desc">Sort: Z-A</option>
        </select>
      </div>
      <div className="contact-list">
        {contacts.length === 0 ? (
          <p className="no-contacts">No contacts found.</p>
        ) : (
          contacts.map(c => (
            <ContactCard key={c._id} contact={c} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
