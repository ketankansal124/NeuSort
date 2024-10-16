import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuCategory from './components/MenuCategory';
import ShoppingCartIcon from './components/ShoppingCartIcon';
import ShoppingCart from './components/ShoppingCart';
import menuData from './menu.json';
import './App.css';

const App = () => {
  const [menu, setMenu] = useState({});
  const [isCartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    // Simulate fetching menu from API
    setMenu(menuData);
  }, []);

  const toggleCartVisibility = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <div className="App min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Food Ordering System</h1>
      <div className="flex justify-end mb-4">
        <ShoppingCartIcon toggleCart={toggleCartVisibility} />
      </div>
      {isCartVisible && <ShoppingCart />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(menu).map((category) => (
          <MenuCategory key={category} category={category} items={menu[category]} />
        ))}
      </div>
    </div>
  );
};

export default App;
