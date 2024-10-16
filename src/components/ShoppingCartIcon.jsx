import React from 'react';

const ShoppingCartIcon = ({ toggleCart }) => {
  return (
    <div 
      className="cart-icon flex items-center cursor-pointer bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition duration-300" 
      onClick={toggleCart}
    >
      <span className="text-2xl mr-2">🛒</span>
      <span className="text-gray-800 font-semibold">View Cart</span>
    </div>
  );
};

export default ShoppingCartIcon;
