import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem, clearCart } from '../redux/cartSlice';

const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleUpdateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            handleRemoveItem(id); // Remove item if quantity is 0 or less
        } else {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem({ id }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="shopping-cart p-4 border rounded-lg bg-white shadow-md">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length > 0 ? (
                <>
                    <ul className="list-none p-0">
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between items-center border-b py-2">
                                <span>{item.name} x{item.quantity} - ${item.price.toFixed(2)}</span>
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="bg-blue-500 text-white px-2 rounded"
                                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                                        +
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 rounded"
                                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>
                                        -
                                    </button>
                                    <button
                                        className="bg-gray-300 text-gray-700 px-2 rounded"
                                        onClick={() => handleRemoveItem(item.id)}>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="font-bold text-xl mt-4">Total: ${getTotal()}</p>
                    <div className="flex justify-between mt-4">
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={handleClearCart}>
                            Clear Cart
                        </button>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded"
                            onClick={() => alert(`Order placed! Total: $${getTotal()}`)}>
                            Checkout
                        </button>
                    </div>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default ShoppingCart;
