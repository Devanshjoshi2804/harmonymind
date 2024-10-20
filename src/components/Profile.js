// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { auth } from './services/firebaseConfig';
import { fetchUserData } from './services/firestore';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const data = await fetchUserData(user.uid);
          setUserData(data);
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadUserData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
      {/* Add more profile fields here */}
    </div>
  );
};

export default Profile;
