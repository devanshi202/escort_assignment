
import React from "react";
import Home from "./Components/Home"
import Register from "./Components/Register"
import SearchFarmer from "./Components/SearchFarmer";
import FarmerDetails from "./Components/FarmerDetails";
import Queries from "./Components/Queries";
import RegisterDetail from "./Components/RegisterDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route exact path="/register" element={<Register />}></Route>
        <Route path="/search" element={<SearchFarmer />}></Route>
        <Route path="/queries" element={<Queries />} />
        
       
      </Routes>
    </Router>
  );
}

export default App;
