import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import ScrollToTop from './ScrollToTop';
import LogoLoader from './components/LogoLoader.jsx'; // ✅ import the logo loader

// ✅ Lazy-load your pages
const AcademicsPage = lazy(() => import('./components/academic/AcademicsPage.jsx'));
const AllCourses = lazy(() => import('./components/academic2/AllCourses.jsx'));
const AcademicsPage3 = lazy(() => import('./components/academic3/AcademicPage3.jsx'));
const DigitalClassroom = lazy(() => import('./components/academic4/DigitalClassroom.jsx'));
const AboutUs = lazy(() => import('./components/aboutUs/AboutUs.jsx'));

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <ScrollToTop />
        {/* ✅ Suspense fallback shows logo while lazy routes are loading */}
        <Suspense fallback={<LogoLoader />}>
          <Routes>
            <Route path="/" element={<AcademicsPage />} />
            <Route path="/AllCourses" element={<AllCourses />} />
            <Route path="/academic_page_3" element={<AcademicsPage3 />} />
            <Route path="/DigitalClassroom" element={<DigitalClassroom />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Router>
  );
}

export default App;
