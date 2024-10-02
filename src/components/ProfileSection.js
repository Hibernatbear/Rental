// components/ProfileSection.js
import React from 'react';
import './ProfileSection.css'; // Import the stylesheet for ProfileSection

const ProfileSection = () => {
  // Sample user data, can be replaced with props or data fetched from an API
  const user = {
    name: "Jane Doe",
    email: "janedoe@example.com",
    avatar: "https://via.placeholder.com/150",
    bio: "Travel enthusiast and adventure lover. Always looking for the next destination!",
  };

  return (
    <div className="profile-section">
      <div className="profile-header">
        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
        <h2>{user.name}</h2>
        <p className="profile-email">{user.email}</p>
      </div>
      <div className="profile-bio">
        <h3>About Me</h3>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default ProfileSection;
