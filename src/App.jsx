import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Catalog from "./Catalog";
import DressDetail from "./DressDetail";
import Landing from "./pages/Landing";
import Header from "./pages/header";
import { HeightQuestion } from "./pages/HeightQuestion";
import ImageInput from "./pages/ImageInput";
import { BodyMeasurement } from "./pages/BodyMeasurement";

function AppContent() {
  const location = useLocation();
  const showHeader = location.pathname !== "/";

  return (
    <div className="bg-white min-h-screen">
      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/dress/:dressId/:retailer" element={<DressDetail />} />
        <Route path="/height" element={<HeightQuestion />} />
        <Route path="/imageinput" element={<ImageInput />} />
        <Route path="/body-measurement" element={<BodyMeasurement />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
