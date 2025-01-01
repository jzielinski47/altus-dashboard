import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import About from "./pages/About";
import { useAuth } from "./context/AuthContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookieDialog from "./components/CookieDialog";
import { useRef } from "react";
import AdminPanelWrapper from "./components/Routes/RouteWrappers/AdminPanelWrapper";
import DashboardRoute from "./components/Routes/RouteWrappers/DashboardWrapper";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import Settings from "./pages/Protected/Settings";
import UserProfile from "./pages/Protected/UserProfile";

const App = () => {
  const { isCookiesSet, user } = useAuth();

  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="app min-h-screen flex flex-col" ref={constraintsRef}>
      {!isCookiesSet ? <CookieDialog con={constraintsRef} /> : null}
      <Router>
        <Header />
        <main className="flex-grow w-full flex flex-col items-center">
          <Routes>
            <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <Home />} />
            <Route path="/auth" element={user ? <Navigate to="/dashboard" replace /> : <Login />} />
            <Route path="/dashboard" element={<DashboardRoute />} />
            <Route path="/admin" element={<AdminPanelWrapper />} />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </div>
  );
};

export default App;
