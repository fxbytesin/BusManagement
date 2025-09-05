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
  const [getNumber, setNumber] = useState('')
  const [toastMessage, setToastMessage] = useState("");
const [showToast, setShowToast] = useState(false);
    
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
          setToastMessage("Registration successful ✅");
          setShowToast(true);
          setNumber(response?.data?.phone);

          setTimeout(() => setShowToast(false), 3000);
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
          

          {showToast && (
  <div
    id="toast-success"
    className="fixed top-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
    role="alert"
  >
    <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
      </svg>
      <span className="sr-only">Check icon</span>
    </div>
    <div className="ms-3 text-sm font-normal">{toastMessage}</div>
    <button
      type="button"
      onClick={() => setShowToast(false)}
      className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <span className="sr-only">Close</span>
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
  </div>
)}





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
