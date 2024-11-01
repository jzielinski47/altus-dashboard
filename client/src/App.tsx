import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Header from "./components/Header";
import About from "./pages/About";

const App = () => {
  return (
    <div className="App bg-neutral-900">
      <div className="w-screen h-screen flex flex-col items-center bg-neutral-900 text-white py-8 px-8 sm:px-16">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
