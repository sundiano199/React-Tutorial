import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<Navigate to="/about" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<h1>HOME DASHBOARD</h1>} />
            <Route path="profile" element={<h1>PROFILE PAGE</h1>} />
            <Route path="settings" element={<h1>SETTINGS PAGE</h1>} />
            <Route path="account" element={<h1>ACCOUNT PAGE</h1>} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  ); // or normal divs
}

export default App;
