import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full text-center border border-green-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">THANK YOU!</h2>
        <p className="text-gray-700 mb-4">
          Your Registration Has Been Submitted Successfully
        </p>
        <p className="text-sm text-gray-600 mb-6">
          A Confirmation Email With Your Event Details Will Be Sent To You Shortly. Please
          Check Your Inbox (And Spam Folder).
        </p>
        <button 
          onClick={handleReturnHome}
          className="bg-gradient-to-r from-green-600 to-green-800 text-white text-sm px-6 py-2 rounded hover:from-green-700 hover:to-green-900 transition-colors"
        >
          Return To Tickets
        </button>
      </div>
    </div>
  );
};

export default Success;