import { useState } from "react";
import { useJwt } from "react-jwt";
import * as React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  const token = localStorage.getItem("token");
  const { decodedToken, isExpired } = useJwt(token);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={decodedToken ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={!decodedToken ? <Navigate to="/" /> : <Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
