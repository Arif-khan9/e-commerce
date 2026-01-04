import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-lg p-8 text-center">
       
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

    
        <h1 className="text-2xl font-semibold text-gray-800">
          Payment Failed
        </h1>

     
        <p className="text-gray-600 mt-3">
          Sorry, your payment could not be completed.
          <br />
          Please try again or choose a different payment method.
        </p>

        {/* Reasons */}
        <div className="text-left bg-gray-50 rounded-lg p-4 mt-5">
          <p className="font-medium text-gray-700 mb-2">
            Possible reasons:
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Insufficient balance</li>
            <li>Incorrect card or UPI details</li>
            <li>Bank server issue</li>
            <li>Payment timeout</li>
          </ul>
        </div>

        
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-medium transition"
          >
            Retry Payment
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 py-2.5 rounded-lg font-medium transition"
          >
            Go to Home
          </button>
        </div>

       
        <p className="text-sm text-gray-500 mt-5">
          Need help?{" "}
          <span
            onClick={() => navigate("/support")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Contact Support
          </span>
        </p>
      </div>
    </div>
  );
};

export default PaymentFailed;
