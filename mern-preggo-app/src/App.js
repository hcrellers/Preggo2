import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import FoodLogList from "./components/foodlog-list.component";
import EditFoodLog from "./components/edit-foodlog.component";
import CreateFoodLog from "./components/Food Log/create-foodlog.component";
import CreateUser from "./components/Create User/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={FoodLogList} />
      <Route path="/edit/:id" component={EditFoodLog} />
      <Route path="/create" component={CreateFoodLog} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;