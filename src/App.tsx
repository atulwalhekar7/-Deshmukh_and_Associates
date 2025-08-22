import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PracticeAreaPage from './pages/PracticeAreaPage';
import GalleryPage from './pages/GalleryPage';


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Deshmukh&Associates/:areaId" element={<PracticeAreaPage />} />
            <Route path="/Deshmukh&Associates/GalleryPage" element={<GalleryPage />} />
          </Routes>
          
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;