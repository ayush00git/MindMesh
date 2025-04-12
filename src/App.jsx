import React from "react";
import Homepage from "./componnets/HomePage";
import ChatModal from "./componnets/ChatModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
