import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (err) {
      console.error("Error creating user: ", err.message);
      setError('Failed to create account');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (err) {
      console.error("Error signing in with Google: ", err.message);
      setError('Failed to sign in with Google');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg border border-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-lg border border-gray-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition duration-200"
        >
          Sign Up with Google
        </button>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-600 font-semibold hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
