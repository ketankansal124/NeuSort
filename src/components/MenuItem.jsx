import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
      <p className="text-gray-600 mb-2">{item.description}</p>
      <p className="text-gray-800 font-bold mb-4">Price: ${item.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded transition duration-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItem;
