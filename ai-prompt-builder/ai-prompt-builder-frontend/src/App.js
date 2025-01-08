import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/homePage";
import CreatePromptPage from "./pages/createPromptPage";
import TestPromptPage from "./pages/testPromptPage";

const App = () => (
  <Router>
    <Navbar />
    <div className="container my-5"> {/* Bootstrap container for proper spacing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePromptPage />} />
        <Route path="/test" element={<TestPromptPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
