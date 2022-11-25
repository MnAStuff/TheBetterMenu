import React from "react";
import { LoginScreen } from "./LoginScreen/LoginScreen";
import { RegisterScreen } from "./RegisterScreen/RegisterScreen";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { OwnerScreen } from "./OwnerScreen/OwnerScreen";

const MyRoutes = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Link to="/login">Login</Link>
    <Link to="/owner">Owner</Link>
    <Link to="/register">Register</Link>
  </div>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/owner" element={<OwnerScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/" element={<MyRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
