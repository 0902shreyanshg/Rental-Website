import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import FlatListing from "../pages/FlatListing";
import FlatDetails from "../pages/FlatDetails";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="*" element={<NotFound />} />
      {/* Additions */}
      <Route path="/flats" element={<FlatListing />} />
      <Route path="/flats/:slug" element={<FlatDetails />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
};

export default Routers;
