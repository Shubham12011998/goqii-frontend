import React, { useState }from 'react';
import UserList from '../components/UserList';
import '../styles/HomePage.css'; 
import AddUserModal from '../components/AddUserModal';
import Smartwatch from '../components/SmartWatch';

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <div className="home-page">
      <header className="home-header">
        
        <h1>Welcome to Goqii User Management</h1>
        <p>A simple solution for your fitness-focused users</p> 
      </header>

      <section className="main-content">
        <UserList />
        <Smartwatch />
        <button className="floating-button" onClick={openModal}>+ Add Member</button>
      {isModalOpen && <AddUserModal onClose={closeModal} />}
      </section>
    </div>
  );
};

export default HomePage;


