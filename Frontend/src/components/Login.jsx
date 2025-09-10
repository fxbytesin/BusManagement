/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import ApiService from '../services/api';
import LoginVerify from './LoginVerify';
import { Loader } from 'lucide-react';

const Login = ({
    setIsLogin
}) => {
  const [phoneNo, setPhoneNo] = useState('');
  const [error, setError] = useState('');
  const [verifyLogin,setVerifyLogin] = useState(true)
  const [getNumber, setNumber] = useState('')
  const [loading, setLoading] = useState(false);
  
  
    const handleLogin = async (e) => {
      // Simple validation
      e.preventDefault()
    if (!phoneNo) {
      setError('Please Enter Mobile Number.');
      return;
      }       
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phoneNo)) {
        setError("Please enter a valid mobile number.");
        return;
      }
        
      const data = {
        phone: `+91 ${phoneNo}`,
      }

      try {
        setLoading(true);
        const response = await ApiService.loginData(data);      
        if (response?.success === true) {          
          setVerifyLogin(false)
          setNumber(response?.data?.phone);
        } else {            
          setError('Invalid Number.');
        }
      } catch (err) {
        // This will catch any unexpected errors outside your API call
        console.error("Unexpected error during login:", err);
        setError('Something went wrong. Please try again later.');
      }
      finally {
        setLoading(false); 
      }
    };
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLogin(false);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    verifyLogin ? (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Enter Mobile Number</label>
            <input
              type="tel"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter mobile number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>

          <button
        type="submit"
        disabled={loading} // 🔹 Disable when loading
        className={`w-full text-white py-2 rounded-lg transition-colors flex items-center justify-center 
          ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
      >
        {loading ? (
           <Loader />
        ) : (
          "Login"
        )}
      </button>
        </form>
      </div>
    </div>
    ) : (
        <LoginVerify
          setIsLogin={setIsLogin}
          getNumber={getNumber}
        />
    )
  );
};

export default Login;
