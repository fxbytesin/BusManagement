/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState } from 'react';
import ApiService from '../services/api';
import RegistrationVerify from './RegistrationVerify';

const Registration = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [verification, setVerification] = useState(true)
  const [getNumber,setNumber] = useState ('')
    
  const handleRegister = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !phone || !role) {
      setError('Please fill all fields.');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

      const data = {
          name: name,
          phone: `+91 ${phone}`,
          role : role
      }      
    try {
        const response = await ApiService.registrationData(data);
        if (response) {
            alert('Registration successful');
            setNumber(response?.data?.phone);
        }
        setVerification(false)
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please try again.');
    }
  };
    return (
            verification ? (
                <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          
                  {error && (
                    <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
                      {error}
                    </div>
                  )}
          
                  <form onSubmit={handleRegister} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
          
                    {/* Phone */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
          
                    {/* Role */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Role</label>
                      <select
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="">Select role</option>
                        <option value="admin">Admin</option>
                        <option value="conductor">Conductor</option>
                      </select>
                    </div>
          
                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            ): (
                <>
                    <RegistrationVerify
                    getNumber={getNumber}
                    />
                </>
            )
      
  );
};

export default Registration;
