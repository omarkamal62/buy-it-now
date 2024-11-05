"use client";

import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

const GlobalProvider = ({ children }) => {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <AuthProvider>
        <CartProvider>
          <SessionProvider>{children}</SessionProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
};

export default GlobalProvider;
