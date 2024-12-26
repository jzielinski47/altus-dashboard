import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Header from "./components/Header";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import { createContext, useState } from "react";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App w-screen h-screen flex flex-col items-center bg-level-1 text-text-white-87">
      <Router>
        <Header />
        <main className="main w-full h-full flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
