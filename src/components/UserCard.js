import React, {useState} from 'react';
import '../styles/UserCard.css'; 
import apiService from '../services/api';
import UpdateModal from './UpdateModal';

const UserCard = ({ user }) => {
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const formattedDob = new Date(user.dob).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });

  // Function to handle delete user
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        await apiService.deleteUser(user.id);
        apiService.getUsers()
        window.location.reload();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const updateDetails = async (e) => {
    e.preventDefault()
    setShowUpdateModal(false)
      try {
        await apiService.updateUser(selectedUser.id,selectedUser).then(()=>{
            window.reload()
        }).catch(()=>{
            console.log('Error updating user');
        });
      
      } catch (error) {
        console.error('Error updating user:', error);
      }
      
  };

  // Function to handle update user
  const handleUpdate = () => {
    if(showUpdateModal) {
        handleCloseModal()
    }
    else {
    setSelectedUser(user);
    setShowUpdateModal(true);}
  };

  const handleCloseModal = () => {
    setShowUpdateModal(false);
    setSelectedUser(null);
  };

  return (
    
    <div className="user-card">
      <h3 className="user-name">{user.name}</h3> 
      <div className="user-details">
        <p>Email: {user.email}</p>
        <p>Date of Birth: {formattedDob}</p>
        <div className="button-group">
        <button className="update-button" onClick={handleUpdate}>Update</button>
      
       
          <button className="delete-button" onClick={handleDelete}>Delete</button>
          
        </div>
      </div>

      {showUpdateModal && <UpdateModal user={selectedUser} onUpdate={updateDetails} />}
    </div>
  );
};

export default UserCard;
