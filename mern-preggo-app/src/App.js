import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar.component";
import Guidelines from "./components/Guidelines/guidelines.component";
import CreateFoodLog from "./components/Food Log/create-foodlog.component";
import Footer from "./components/Footer/footer"

function App() {
  return (
    <Router>
      
        <Navbar />
        <div className="container">
          <Route path="/" exact component={Guidelines} />
          <Route path="/create" component={CreateFoodLog} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;