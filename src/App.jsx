import { Route, Routes, Navigate } from "react-router-dom";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
 import React from "react";

 import Homepage from "./pages/Homepage";

import Electronics from "./pages/Electronics";
import Womens from "./pages/Womens";
import Jewelery from "./pages/Jewelery";
import Mensclothing from "./pages/Mensclothing";


const App = () => {
 

  return (
    <>
    
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}

        <Route path="/" element={ <Homepage/>}/>
        <Route path="electronics" element={  <Electronics/>}/>
        <Route path="womens" element={ <Womens/> }/>
        <Route path="jewelery" element={ <Jewelery/> }/>
        <Route path="mensclothing" element={ <Mensclothing/> }/>

      
      
      
      

      </Routes>


     


      
    </>
  );
};

export default App;