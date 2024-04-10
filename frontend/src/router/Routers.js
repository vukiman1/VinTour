import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "./../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Login from "./../pages/Login";
import Register from "../pages/Register";
import SearchResuiltList from "../pages/SearchResuiltList";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tour/search" element={<SearchResuiltList />} />
      </Routes>
    </div>
  );
};

export default Routers;
