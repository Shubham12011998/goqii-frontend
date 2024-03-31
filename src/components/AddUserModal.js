import React, { useState } from 'react';
import apiService from '../services/api';
import "../styles/AddUserModal.css"

const AddUserModal = ({ onClose }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.createUser(userData);
      onClose();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="au-modal">
      <div className="au-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add Member</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={userData.name} onChange={handleChange} required />
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} required />
          <label>Password:</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} required />
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={userData.dob} onChange={handleChange} required />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
