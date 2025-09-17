import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";   // adjust path if needed
import Footer from "../layout/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />   {/* Navbar always visible */}
      <main className="container mt-4">
        <Outlet /> {/* Page-specific content */}
      </main>
      <Footer />   {/* Footer always visible */}
    </>
  );
};

export default RootLayout;