import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // This is our own custom provider!We will store data(state) and functionality (updaters) in here and anyone access via consumer!!

  // Close cart by default
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    return setCartOpen(!cartOpen);
  }

  function closeCart() {
    return setCartOpen(false);
  }

  function openCart() {
    return setCartOpen(true);
  }

  return (
    <LocalStateProvider value={{ cartOpen, toggleCart, closeCart, openCart }}>
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state : like useUser

// it's solves this: From now there is  no need to import useContext and LocalStateContext whenever we need cart state.Use useCart custom hook instead.

function useCart() {
  const data = useContext(LocalStateContext);
  return data;
}

export { CartStateProvider, useCart };
