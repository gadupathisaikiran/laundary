import Createorder from "./createorder";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orderselect from "./orderselect";

function App() {
  return (
    <>
        

       <BrowserRouter>
         <Routes>
           <Route path="/selectorder" element={<Orderselect/>} />


         </Routes>
        
       </BrowserRouter>
      
      
       <Createorder/>

    </>
  );
}

export default App;
