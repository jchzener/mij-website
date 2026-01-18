// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import PastJamsPage from "./pages/PastJamsPage";
import JamDetailPage from "./pages/JamDetailPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jams" element={<PastJamsPage />} />
        <Route path="/jams/:id" element={<JamDetailPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
