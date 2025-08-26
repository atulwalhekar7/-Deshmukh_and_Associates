
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import PracticeAreaPage from "./pages/PracticeAreaPage";
import GalleryPage from "./pages/GalleryPage";
import Disclaimer from "./components/Disclaimer Section/Disclaimer";  // ✅ import Disclaimer
import Decline from "./components/Disclaimer Section/Decline";        // ✅ import Decline

function App() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimerAccepted");
    setDisclaimerAccepted(accepted === "true");
  }, []);

  // While checking localStorage, don’t render routes yet
  if (disclaimerAccepted === null) {
    return null;
  }

  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            {/* Disclaimer route */}
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/decline" element={<Decline />} />

            {/* Protected routes (require disclaimer accepted) */}
            {disclaimerAccepted ? (
              <>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/Deshmukh&Associates/:areaId"
                  element={<PracticeAreaPage />}
                />
                <Route
                  path="/Deshmukh&Associates/GalleryPage"
                  element={<GalleryPage />}
                />
              </>
            ) : (
              // If not accepted → force them to disclaimer page
              <Route path="*" element={<Navigate to="/disclaimer" replace />} />
            )}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
