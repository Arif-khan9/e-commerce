import { Route, Routes, Navigate } from "react-router-dom";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
 import React from "react";
 import Homepage from "./Components/HomePage/Homepage";

const App = () => {
 

  return (
    <>
    
      {/* <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
      <Homepage/>
    </>
  );
};

export default App;