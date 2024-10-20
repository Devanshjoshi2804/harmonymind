import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient'; // Adjust the path accordingly
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const ProfileSetup = () => {
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dailyHabits, setDailyHabits] = useState('');
  const [emotionalState, setEmotionalState] = useState('');
  const [message, setMessage] = useState('');

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        fetchProfile(user.uid);
      }
    });
  }, [auth]);

  const fetchProfile = async (uid) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', uid)
      .single();

    if (data) {
      setName(data.name);
      setAge(data.age);
      setDailyHabits(data.daily_habits);
      setEmotionalState(data.emotional_state);
    } else if (error && error.message !== "No such record") {
      console.error('Error fetching profile:', error);
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('profiles')
      .upsert({
        user_id: userId,
        name,
        age,
        daily_habits: dailyHabits,
        emotional_state: emotionalState,
        created_at: new Date(),
      });

    if (error) {
      setMessage('Error updating profile');
      console.error(error);
    } else {
      setMessage('Profile updated successfully');
    }
  };

  return (
    <div className="profile-setup-page bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Setup Your Profile</h2>

        <form onSubmit={handleProfileSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dailyHabits">Daily Habits</label>
            <textarea
              id="dailyHabits"
              value={dailyHabits}
              onChange={(e) => setDailyHabits(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emotionalState">Emotional State</label>
            <textarea
              id="emotionalState"
              value={emotionalState}
              onChange={(e) => setEmotionalState(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Profile
          </button>
        </form>

        {message && <p className="text-center text-green-500 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default ProfileSetup;
