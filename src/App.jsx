import { useState } from "react";
import { useJwt } from "react-jwt";
import * as React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

function App() {
  const token = localStorage.getItem("token");
  const { decodedToken, isExpired } = useJwt(token);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={decodedToken ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={!decodedToken ? <Navigate to="/login" /> : <Dashboard />}
        />
      </Routes>
    </div>
  );
}

export default App;
