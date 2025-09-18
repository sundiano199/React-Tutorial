import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Lazy imports for pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Error404 = lazy(() => import("./pages/Error404"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

// Lazy import for components
const Nav = lazy(() => import("./components/Nav"));
const DashboardLayout = lazy(() => import("./components/DashboardLayout"));
function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading Application</h1>}>
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
      </Suspense>
    </>
  ); // or normal divs
}

export default App;
