import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import HowItWorks from "./Pages/HowItWorks";
import Tailored from "./Pages/Tailored";
import ProductsPage from "./Pages/ProductsPage";
import ResourcesPage from "./Pages/ResourcesPage";

export default function App() {
  return (
    <div className=" max-w-[1920px] mx-auto ">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/steps" element={<HowItWorks />} />
          <Route path="/tailored" element={<Tailored />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </Router>
    </div>
  );
}
