import React from 'react';

const CheckoutButton = ({ handleCheckout }) => {
  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
