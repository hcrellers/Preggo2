import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/Navbar/navbar.component";
import Guidelines from "./components/Guidelines/guidelines.component";
import CreateFoodLog from "./components/Food Log/create-foodlog.component";
import CreateUser from "./components/Create User/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Guidelines} />
      <Route path="/create" component={CreateFoodLog} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;