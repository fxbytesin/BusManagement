/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState } from 'react';
import ApiService from '../services/api';
import { useNavigate } from 'react-router-dom';

const RegistrationVerify = ({
  getNumber
}) => {
  const [otp,setOtp] = useState('')
  const [error, setError] = useState('');


  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!otp) {
      setError('Please give otp number');
      return;
    }

      const data = {
          phone: getNumber,
          otp : otp
      }      
    try {
      const response = await ApiService.registrationVerification(data);
      if (response) {
        alert('Registration Verification successful');
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please try again.');
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">       
          {/* Role */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">OTP</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
         Enter otp
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationVerify;
