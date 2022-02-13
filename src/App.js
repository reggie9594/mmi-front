import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home.js";
import Dashboard from "./components/Dashboard.js";
import Cart from "./components/Cart.js";
import SignUp from "./SignUp.js";
import Login from "./Login.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
