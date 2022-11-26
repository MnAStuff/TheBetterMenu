import React from "react";
import { LoginScreen } from "./LoginScreen/LoginScreen";
import { RegisterScreen } from "./RegisterScreen/RegisterScreen";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { OwnerScreen } from "./OwnerScreen/OwnerScreen";
import { Menu } from "./OwnerScreen/Menu/Menu";

const MyRoutes = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Link to="/login">Login</Link>
    <Link to="/owner/1">Owner</Link>
    <Link to="/register">Register</Link>
    <Link to="/menu/16/1">Menu</Link>
    <Link to="/menu/3/2">Menu2</Link>
  </div>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/owner/:id" element={<OwnerScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/menu/:table/:id" element={<Menu />} />
          <Route path="/" element={<MyRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
