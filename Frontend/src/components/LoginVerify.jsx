/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState } from 'react';
import ApiService from '../services/api';
import ToastMessage from './pages/ToastMessage';
import { Loader } from 'lucide-react';

const LoginVerify = ({
    getNumber,
    setIsLogin
}) => {
  const [otp,setOtp] = useState('')
  const [error, setError] = useState('');
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

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
      setLoading(true)
      const response = await ApiService.verifyLogin(data);      
      if (response?.success === true) {
        setToastMessage(response?.data?.message);
        setShowToast(true);
        setTimeout(() => setIsLogin(false), 1000);
        setTimeout(() => setShowToast(false), 3000);
      }
      else {
        setError('Invalid otp');
      }
    } catch (err) {
      console.error(err);
      setError('Login failed. Please try again.');
    }
    finally {
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log in</h2>

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
          {/* <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Enter otp
          </button> */}
          <button
        type="submit"
        disabled={loading} // 🔹 Disable when loading
        className={`w-full text-white py-2 rounded-lg transition-colors flex items-center justify-center 
          ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
      >
        {loading ? (
           <Loader />
        ) : (
          " Enter otp"
        )}
      </button>
        </form>
      </div>

      {showToast && (
             <ToastMessage
             setShowToast={setShowToast}
             toastMessage={toastMessage}
           />
        )
        }
    </div>
  );
};

export default LoginVerify;
