import { useRef } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CookieDialog from "./components/CookieDialog";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import AdminPanelWrapper from "./components/Routes/RouteWrappers/AdminPanelWrapper";
import DashboardRoute from "./components/Routes/RouteWrappers/DashboardWrapper";
import { useAuth } from "./context/AuthContext";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Settings from "./pages/Protected/Settings";
import UserProfile from "./pages/Protected/UserProfile";
import AssetTracker from "./pages/Protected/AssetTracker/AssetTracker";

const App = () => {
  const { isCookiesSet, user } = useAuth();

  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="app min-h-screen flex flex-col" ref={constraintsRef}>
      <Router>
        <Header />
        {!isCookiesSet ? <CookieDialog con={constraintsRef} /> : null}
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
            <Route
              path="/accbalance"
              element={
                <ProtectedRoute>
                  <AssetTracker />
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
