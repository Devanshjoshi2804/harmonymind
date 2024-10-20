import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaUser, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const mockPsychiatrists = [
  {
    place_id: '1',
    name: 'Dr. Manjit Singh Palahe',
    vicinity: 'Pratiksha Clinic, Chembur East, Mumbai',
    rating: 4.6,
    user_ratings_total: 25,
    opening_hours: { open_now: true }
},
{
    place_id: '2',
    name: 'Dr. Armaan Pandey',
    vicinity: 'Harmony Psychiatry Clinic, Chembur, Mumbai',
    rating: 4.7,
    user_ratings_total: 30,
    opening_hours: { open_now: false }
},
{
    place_id: '3',
    name: 'Dr. Neha Shah',
    vicinity: 'Harmony Psychiatry Clinic, Chembur, Mumbai',
    rating: 4.8,
    user_ratings_total: 22,
    opening_hours: { open_now: true }
},
{
    place_id: '4',
    name: 'Dr. Amit Upasham',
    vicinity: 'Chandraganga Spandan Hospital, Mumbai',
    rating: 4.5,
    user_ratings_total: 27,
    opening_hours: { open_now: true }
},
{
    place_id: '5',
    name: 'Dr. Atul Aswani',
    vicinity: 'Ivy Clinic, Santacruz East, Mumbai',
    rating: 4.6,
    user_ratings_total: 18,
    opening_hours: { open_now: true }
},
{
    place_id: '6',
    name: 'Dr. Mayuri Mohanty',
    vicinity: 'Mannshakti Mental Wellness Centre, Mumbai',
    rating: 4.9,
    user_ratings_total: 15,
    opening_hours: { open_now: false }
},
{
    place_id: '7',
    name: 'Dr. Parul Tank',
    vicinity: 'Chembur, Mumbai',
    rating: 4.8,
    user_ratings_total: 20,
    opening_hours: { open_now: true }
},
{
    place_id: '8',
    name: 'Dr. Girish Date',
    vicinity: 'Chembur, Mumbai',
    rating: 4.5,
    user_ratings_total: 23,
    opening_hours: { open_now: false }
},
{
    place_id: '9',
    name: 'Dr. Sachin Patkar',
    vicinity: 'Chembur, Mumbai',
    rating: 4.7,
    user_ratings_total: 19,
    opening_hours: { open_now: true }
},
{
    place_id: '10',
    name: 'Dr. Sushma Sonavane',
    vicinity: 'Chembur, Mumbai',
    rating: 4.6,
    user_ratings_total: 17,
    opening_hours: { open_now: false }
},
{
    place_id: '11',
    name: 'Dr. Kranti Kadam',
    vicinity: 'Chembur, Mumbai',
    rating: 4.5,
    user_ratings_total: 21,
    opening_hours: { open_now: true }
},
{
    place_id: '12',
    name: 'Dr. Sajid Ali Khan',
    vicinity: 'New Noor Hospital, Kurla West, Mumbai',
    rating: 4.6,
    user_ratings_total: 15,
    opening_hours: { open_now: true }
},
{
    place_id: '13',
    name: 'Dr. Aditya Walawalker',
    vicinity: 'City Hospital Research Centre, Kurla West, Mumbai',
    rating: 4.7,
    user_ratings_total: 18,
    opening_hours: { open_now: false }
},
{
    place_id: '14',
    name: 'Dr. R.M. Haridas',
    vicinity: 'Grant Medical College, Byculla, Mumbai',
    rating: 4.9,
    user_ratings_total: 12,
    opening_hours: { open_now: true }
},
{
    place_id: '15',
    name: 'Dr. Hemangee Dhavale',
    vicinity: 'Dhanwantari Hospital, Shivaji Park, Mumbai',
    rating: 4.8,
    user_ratings_total: 20,
    opening_hours: { open_now: false }
},
{
    place_id: '16',
    name: 'Dr. Ravindra Tambe',
    vicinity: 'Tambe Clinic, Thane, Mumbai',
    rating: 4.5,
    user_ratings_total: 10,
    opening_hours: { open_now: true }
},
{
    place_id: '17',
    name: 'Dr. Kashmira Kain',
    vicinity: 'Chembur, Mumbai',
    rating: 4.7,
    user_ratings_total: 18,
    opening_hours: { open_now: true }
},
{
    place_id: '18',
    name: 'Dr. Sneha Ramesh',
    vicinity: 'Jagruti Rehab Centre, Mumbai',
    rating: 4.6,
    user_ratings_total: 16,
    opening_hours: { open_now: false }
},
{
    place_id: '19',
    name: 'Dr. Sangram Prakash',
    vicinity: 'Chembur Mental Health Clinic, Mumbai',
    rating: 4.8,
    user_ratings_total: 19,
    opening_hours: { open_now: true }
},
{
    place_id: '20',
    name: 'Dr. Kedar Tilwe',
    vicinity: 'Shree Hospital, Vashi, Mumbai',
    rating: 4.7,
    user_ratings_total: 23,
    opening_hours: { open_now: false }
},
{
    place_id: '21',
    name: 'Dr. Aditi Bagwe',
    vicinity: 'Harmony Psychiatry, Chembur, Mumbai',
    rating: 4.9,
    user_ratings_total: 21,
    opening_hours: { open_now: true }
},
{
    place_id: '22',
    name: 'Dr. Chaitanya Joshi',
    vicinity: 'Mumbai Psychiatry Centre, Mumbai',
    rating: 4.8,
    user_ratings_total: 12,
    opening_hours: { open_now: true }
},
{
    place_id: '23',
    name: 'Dr. Sheetal Pawar',
    vicinity: 'Ashwini Clinic, Mulund, Mumbai',
    rating: 4.5,
    user_ratings_total: 14,
    opening_hours: { open_now: false }
},
{
    place_id: '24',
    name: 'Dr. Neha Gandhi',
    vicinity: 'Shanti Mind Clinic, Mumbai',
    rating: 4.7,
    user_ratings_total: 11,
    opening_hours: { open_now: true }
},
{
    place_id: '25',
    name: 'Dr. Vikram Sapatnekar',
    vicinity: 'Navi Mumbai, Mumbai',
    rating: 4.9,
    user_ratings_total: 14,
    opening_hours: { open_now: true }
},
{
    place_id: '26',
    name: 'Dr. Prachi Mehta',
    vicinity: 'Cumballa Hill Hospital, Mumbai',
    rating: 4.8,
    user_ratings_total: 19,
    opening_hours: { open_now: true }
},
{
    place_id: '27',
    name: 'Dr. Shubhada Madkaikar',
    vicinity: 'Global Hospital, Parel, Mumbai',
    rating: 4.7,
    user_ratings_total: 20,
    opening_hours: { open_now: false }
},
{
    place_id: '28',
    name: 'Dr. Rukmini Lakhar',
    vicinity: 'Zen Hospital, Chembur, Mumbai',
    rating: 4.6,
    user_ratings_total: 18,
    opening_hours: { open_now: true }
},
{
    place_id: '29',
    name: 'Dr. Prasad Inamdar',
    vicinity: 'Chembur, Mumbai',
    rating: 4.5,
    user_ratings_total: 10,
    opening_hours: { open_now: false }
},
{
    place_id: '30',
    name: 'Dr. Shweta Bharti',
    vicinity: 'Crystal Clinic, Chembur, Mumbai',
    rating: 4.8,
    user_ratings_total: 16,
    opening_hours: { open_now: true }
},
{
    place_id: '31',
    name: 'Dr. Darshan Gandhi',
    vicinity: 'Sion Hospital, Mumbai',
    rating: 4.7,
    user_ratings_total: 12,
    opening_hours: { open_now: true }
},
{
    place_id: '32',
    name: 'Dr. Vivek Maru',
    vicinity: 'Sushrut Hospital, Chembur, Mumbai',
    rating: 4.6,
    user_ratings_total: 18,
    opening_hours: { open_now: false }
},
{
    place_id: '33',
    name: 'Dr. Poonam Chandak',
    vicinity: 'Care Hospital, Chembur, Mumbai',
    rating: 4.5,
    user_ratings_total: 20,
    opening_hours: { open_now: true }
},
{
    place_id: '34',
    name: 'Dr. Meenakshi Dave',
    vicinity: 'Andheri, Mumbai',
    rating: 4.8,
    user_ratings_total: 12,
    opening_hours: { open_now: true }
},
{
    place_id: '35',
    name: 'Dr. Pankaj Gunjal',
    vicinity: 'Mind and Brain Clinic, Chembur, Mumbai',
    rating: 4.7,
    user_ratings_total: 15,
    opening_hours: { open_now: false }
},
{
    place_id: '36',
    name: 'Dr. Shrinivas Tambe',
    vicinity: 'Shree Hospital, Mulund, Mumbai',
    rating: 4.9,
    user_ratings_total: 17,
    opening_hours: { open_now: true }
},
{
    place_id: '37',
    name: 'Dr. Vidhyasagar Mahajan',
    vicinity: 'Mumbai Psychiatry Clinic, Mumbai',
    rating: 4.6,
    user_ratings_total: 21,
    opening_hours: { open_now: false }
},
{
    place_id: '38',
    name: 'Dr. Darshana Joshi',
    vicinity: 'Mindspace Clinic, Chembur, Mumbai',
    rating: 4.8,
    user_ratings_total: 19,
    opening_hours: { open_now: true }
},
{
    place_id: '39',
    name: 'Dr. Ashok Malkani',
    vicinity: 'Hiranandani Hospital, Powai, Mumbai',
    rating: 4.9,
    user_ratings_total: 14,
    opening_hours: { open_now: true }
},
{
    place_id: '40',
    name: 'Dr. Sarita Damania',
    vicinity: 'Mind and Body Clinic, Chembur, Mumbai',
    rating: 4.7,
    user_ratings_total: 13,
    opening_hours: { open_now: false }
},
{
    place_id: '41',
    name: 'Dr. Vidya Shinde',
    vicinity: 'Lifeline Clinic, Bandra, Mumbai',
    rating: 4.6,
    user_ratings_total: 15,
    opening_hours: { open_now: true }
},
{
    place_id: '42',
    name: 'Dr. Rakesh Soni',
    vicinity: 'Mental Wellness Clinic, Chembur, Mumbai',
    rating: 4.8,
    user_ratings_total: 12,
    opening_hours: { open_now: false }
},
{
    place_id: '43',
    name: 'Dr. Janki Mehta',
    vicinity: 'Infinity Clinic, Chembur, Mumbai',
    rating: 4.5,
    user_ratings_total: 20,
    opening_hours: { open_now: true }
},
{
    place_id: '44',
    name: 'Dr. Bhushan Desai',
    vicinity: 'Sion Hospital, Mumbai',
    rating: 4.6,
    user_ratings_total: 17,
    opening_hours: { open_now: false }
},
{
    place_id: '45',
    name: 'Dr. Preeti Arora',
    vicinity: 'Zen Hospital, Chembur, Mumbai',
    rating: 4.9,
    user_ratings_total: 18,
    opening_hours: { open_now: true }
},
{
    place_id: '46',
    name: 'Dr. Madhuri Mehta',
    vicinity: 'Chembur Mental Health Center, Mumbai',
    rating: 4.7,
    user_ratings_total: 11,
    opening_hours: { open_now: true }
},
{
    place_id: '47',
    name: 'Dr. Vikas Patil',
    vicinity: 'Sushrut Hospital, Chembur, Mumbai',
    rating: 4.8,
    user_ratings_total: 16,
    opening_hours: { open_now: true }
},
{
    place_id: '48',
    name: 'Dr. Vinit Rajput',
    vicinity: 'Harmony Clinic, Chembur, Mumbai',
    rating: 4.5,
    user_ratings_total: 13,
    opening_hours: { open_now: false }
},
{
    place_id: '49',
    name: 'Dr. Amrita Sinha',
    vicinity: 'Global Hospital, Parel, Mumbai',
    rating: 4.9,
    user_ratings_total: 14,
    opening_hours: { open_now: true }
},
{
    place_id: '50',
    name: 'Dr. Shivani Rana',
    vicinity: 'Chembur, Mumbai',
    rating: 4.7,
    user_ratings_total: 18,
    opening_hours: { open_now: true }
},

];

const PsychiatristSearch = () => {
  const [location, setLocation] = useState('');
  const [filteredPsychiatrists, setFilteredPsychiatrists] = useState(mockPsychiatrists); // For filtered results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Filter psychiatrists based on the location input
    const filtered = mockPsychiatrists.filter(psych =>
      psych.vicinity.toLowerCase().includes(location.toLowerCase())
    );

    setFilteredPsychiatrists(filtered);

    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="psychiatrist-search-container bg-gradient-to-r from-blue-500 to-purple-600 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-extrabold text-center mb-8 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Find Psychiatrists Near You
        </motion.h2>
        <motion.form 
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative flex-grow">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full py-3 px-10 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            <FaSearch className="mr-2" />
            {loading ? 'Searching...' : 'Search'}
          </motion.button>
        </motion.form>

        {error && (
          <motion.p 
            className="text-red-200 text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.p>
        )}

        {filteredPsychiatrists.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredPsychiatrists.map((psych) => (
              <motion.div
                key={psych.place_id}
                className="bg-white rounded-lg shadow-lg p-6"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <FaUser className="text-purple-600 mr-2" size={24} />
                  <h4 className="text-xl font-semibold">{psych.name}</h4>
                </div>
                <p className="text-gray-600 mb-2">
                  <FaMapMarkerAlt className="inline mr-2" />
                  {psych.vicinity}
                </p>
                {psych.rating && (
                  <div className="flex items-center mb-2">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="font-semibold">{psych.rating}</span>
                    <span className="text-gray-600 ml-1">({psych.user_ratings_total} reviews)</span>
                  </div>
                )}
                {psych.opening_hours && (
                  <p className="text-gray-600">
                    {psych.opening_hours.open_now ? 'Open now' : 'Closed'}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PsychiatristSearch;