import React, { useState } from 'react';
import "../styles/UpdateModal.css"
import apiService from '../services/api';

const UpdateModal = ({ user, onUpdate }) => {
  const [userData, setUserData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const updateDetails = async (e) => {
      try {
        await apiService.updateUser(userData.id,userData);
      } catch (error) {
        console.error('Error updating user:', error);
        alert(error.response.data);
      }
  };

  return (
    <div className="update-modal">
      <div className="update-modal-content">
        <h4>Edit User Data</h4>
        <form>
          <label>Name:</label>
          <input type="text" name="name" value={userData.name} onChange={handleChange} />
          <label>Email:</label>
          <input type="text" name="email" value={userData.email} onChange={handleChange} />
          <label>Date of Birth:</label>
          <input type="date" name="dob" onChange={handleChange} />
          
        </form>
        <button onClick={updateDetails}>Confirm Changes</button>

      </div>
    </div>
  );
};

export default UpdateModal;
