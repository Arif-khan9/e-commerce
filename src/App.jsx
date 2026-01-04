import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
 import Homepage from "./pages/Homepage";
import Womens from "./pages/Category";
import Order from "./Components/Order";
import { useContext } from "react";
import { contextApi } from "./Components/Authstatus";
import Addtoart from "./Components/Addtocart";
import PaymentFailed from "./Components/Failpayment";




const App = () => {
  const {isAuthenticated} = useContext(contextApi)
  
  return (
    <>
    
       <Routes>
        <Route path="paymentFailed" element={< PaymentFailed />}/>
        <Route path="addtoart" element={< Addtoart/>}/>
        <Route path="/" element={isAuthenticated ? <Homepage/> :<Signup /> }  />
        <Route path="/login" element={<Login />} />
        <Route path="/:categorie" element={ <Womens/> }/>
        <Route path="order/:id" element={<Order/>}/>
      </Routes> 


     
     

      
    </>
  );
};

export default App;