import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import About from "./pages/About";
import { useAuth } from "./context/AuthContext";
import DashboardRoute from "./components/DashboardWrapper";

const App = () => {
  const { user } = useAuth();

  return (
    <div className="app min-h-screen flex flex-col">
      <Router>
        <Header />
        <main className="flex-grow w-full flex flex-col items-center">
          <Routes>
            <Route path="/" element={user ? <DashboardRoute /> : <Home />} />
            <Route path="/auth" element={user ? <DashboardRoute /> : <Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<DashboardRoute />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </div>
  );
};

export default App;
