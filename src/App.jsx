import { Route, Routes, Navigate } from "react-router-dom";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
 import React from "react";
// import { CartProvider } from "./context/CartContext";
 import Homepage from "./pages/Homepage";

// import Electronics from "./pages/Electronics";
import Womens from "./pages/Womens";
// import Jewelery from "./pages/Jewelery";
// import Mensclothing from "./pages/Mensclothing";
import Order from "./pages/Order";
// import Addcart from "./pages/Addcart";

const App = () => {
 

  return (
    <>
    
       <Routes>
          {/* <CartProvider>
      <Routes>
        {Addcart}
      </Routes>
    </CartProvider> */}
        {/* <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}

        <Route path="/" element={ <Homepage/>}/>
        {/* <Route path="electronics" element={  <Electronics/>}/> */}
        <Route path="/:categorie" element={ <Womens/> }/>
        {/* <Route path="jewelery" element={ <Jewelery/> }/> */}
        {/* <Route path="mensclothing" element={ <Mensclothing/> }/> */}
        <Route path="order/:id" element={<Order/>}/>
      </Routes> 


     
     

      
    </>
  );
};

export default App;