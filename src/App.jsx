import { Route, Routes, Navigate } from "react-router-dom";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
 import React from "react";
 import Button from "./pages/Button";
 import Homepage from "./pages/Homepage";
 import Section from "./pages/Section";

const App = () => {
 

  return (
    <>
    
      {/* <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
      <Homepage/>
      <Button/>
      <Section/>
      
    </>
  );
};

export default App;