import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/homePage";
import CreatePromptPage from "./pages/createPromptPage";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreatePromptPage />} />
    </Routes>
  </Router>
);

export default App;
