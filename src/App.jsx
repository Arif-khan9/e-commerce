import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
 import React from "react";

const App = () => {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;