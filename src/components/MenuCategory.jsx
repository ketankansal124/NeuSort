import React from 'react';
import MenuItem from './MenuItem';

const MenuCategory = ({ category, items }) => {
  return (
    <div className="my-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
