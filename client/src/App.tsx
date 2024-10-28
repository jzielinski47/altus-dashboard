import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="App bg-neutral-900">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
