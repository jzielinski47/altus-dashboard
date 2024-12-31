import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Header from "./pages/Header";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();

  return (
    <div className="app min-h-screen flex flex-col">
      <Router>
        <Header />
        <main className="flex-grow w-full flex flex-col items-center">
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                ) : (
                  <Home />
                )
              }
            />
            <Route path="/auth" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <footer className="mt-auto w-full py-4 text-center bg-gray-900 text-text-white-38">
            Copyright Jakub Zieliński 2024-2025
          </footer>
        </main>
      </Router>
    </div>
  );
};

export default App;
