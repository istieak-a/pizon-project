import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/generate-new" element={<Home />} />
      </Routes>
    </Router>
  );
}
