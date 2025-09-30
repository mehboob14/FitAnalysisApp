import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./Catalog";
import DressDetail from "./DressDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/dress/:dressId/:retailer" element={<DressDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
