import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        if (!product._id || !product.selectedMl) return;

        // Unique ID burada yaradılır
        const uniqueId = product._id + "-" + product.selectedMl;

        setCartItems(prev => {
            const existing = prev.find(item => item.uniqueId === uniqueId);

            if (existing) {
                return prev.map(item =>
                    item.uniqueId === uniqueId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...product, uniqueId, quantity: 1 }];
        });
    };

    const removeFromCart = (product) => {
        setCartItems(prev => prev.filter(item => item.uniqueId !== product.uniqueId));
    };

    const increaseQuantity = (product) => {
        setCartItems(prev => prev.map(item =>
            item.uniqueId === product.uniqueId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    const decreaseQuantity = (product) => {
        setCartItems(prev => prev.map(item =>
            item.uniqueId === product.uniqueId
                ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                : item
        ));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
