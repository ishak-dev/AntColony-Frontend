import { useState } from "react";
import { useJwt } from "react-jwt";
import * as React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ExecuteProject from "./pages/executeProject";
import AddProject from "./pages/addProject";

/*
Starting point of application, we defined here routes that are existing, that means
all defined pages will be here displayed and each page will have own route
pages are defined in folder called page
*/

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

        <Route path="dashboard">
          <Route
            path=""
            element={!decodedToken ? <Navigate to="/login" /> : <Dashboard />}
          />
          <Route path="executeproject" element={<ExecuteProject />} />
          <Route path="addproject" element={<AddProject />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
