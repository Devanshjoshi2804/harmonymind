import React from 'react';
import ReactDOM from 'react-dom/client'; // Update import for React 18
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
