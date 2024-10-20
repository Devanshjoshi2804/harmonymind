import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', EmotionalHealth: 70, Wellbeing: 65 },
  { name: 'Week 2', EmotionalHealth: 75, Wellbeing: 68 },
  { name: 'Week 3', EmotionalHealth: 80, Wellbeing: 70 },
  { name: 'Week 4', EmotionalHealth: 85, Wellbeing: 75 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-page bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Your Dashboard</h2>

        {/* Emotional Health Graph */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Emotional Health Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="EmotionalHealth" stroke="#8884d8" strokeWidth={3} />
              <Line type="monotone" dataKey="Wellbeing" stroke="#82ca9d" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* AI Chatbot Interaction */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent AI Chatbot Interactions</h3>
          <div className="chatbot-log">
            {/* Example of a simple interaction log */}
            <div className="mb-4">
              <p className="text-indigo-600 font-medium">You:</p>
              <p className="text-gray-700">How can I manage stress better?</p>
            </div>
            <div className="mb-4">
              <p className="text-indigo-600 font-medium">HarmonyMind:</p>
              <p className="text-gray-700">Consider practicing mindfulness techniques such as deep breathing exercises and meditation.</p>
            </div>
            {/* Add more interactions as needed */}
          </div>
        </div>

        {/* Personalized Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personalized Recommendations</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Practice mindfulness for at least 10 minutes daily.</li>
            <li>Engage in physical activities to boost your emotional well-being.</li>
            <li>Regularly review your emotional health trends to identify areas of improvement.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
