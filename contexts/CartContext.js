import React, { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from './AuthContext';
import { db } from '@/firebase/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (user) {
      const cartRef = collection(db, 'users', user.uid, 'cart');
      const unsubscribe = onSnapshot(cartRef, (snapshot) => {
        const cartItems = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCart(cartItems);
        
        // Calculate the total count of items in the cart
        const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(total);
      });

      return () => unsubscribe();
    }
  }, [user]);

  return (
    <CartContext.Provider value={{ cart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
