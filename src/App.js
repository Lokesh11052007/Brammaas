import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';

import ScrollToTop from './ScrollToTop';
import LogoLoader from './components/LogoLoader.jsx'; // ✅ import the logo loader
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';


// ✅ Lazy-load your pages
const AcademicsPage = lazy(() => import('./components/academic/academic1/AcademicsPage.jsx'));
const AllCourses = lazy(() => import('./components/academic/academic2/AllCourses.jsx'));
const AcademicsPage3 = lazy(() => import('./components/academic/academic3/AcademicPage3.jsx'));
const DigitalClassroom = lazy(() => import('./components/academic/academic4/DigitalClassroom.jsx'));
const AboutUs = lazy(() => import('./components/aboutUs/AboutUs.jsx'));
const BoardOfDirectors = lazy(() => import('./components/BoardOfDirector/BoardOfDirector.jsx'))

const Home = lazy( () => import('./components/home/Home.jsx')); 
const Infrastructure = lazy(() => import('./components/infrastructure/Infrastructure.jsx'))
const Toppers = lazy(() => import('./components/toppers/Toppers.jsx'))
const Contact = lazy(() => import('./components/contactUs/Contactus.jsx'))
const Gallery = lazy(() => import('./components/gallery/Gallery.jsx'))
const Annual = lazy(() => import('./components/gallery/Annual.jsx'))
const Admission = lazy(() => import('./components/admission/Admission.jsx'))
function App() {
  return (
    <Router>
      <Header />
      <AnimatePresence mode="wait">
        <ScrollToTop />
        {/* ✅ Suspense fallback shows logo while lazy routes are loading */}
        <Suspense fallback={<LogoLoader />}>
          <Routes>
            <Route path="/counselling" element={<AcademicsPage />} />
            <Route path="/AllCourses" element={<AllCourses />} />
            <Route path="/brammaasPrograme" element={<AcademicsPage3 />} />
            <Route path="/DigitalClassroom" element={<DigitalClassroom />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="BoardOfDirectors" element={<BoardOfDirectors />} />
            
            <Route path='/' element={<Home />} />
            <Route path='/topper' element={<Toppers/>} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/infrastructure' element={<Infrastructure/>} />
            <Route path='/contactUs' element={<Contact/>} />
            <Route path='/annual' element={<Annual />} />
            <Route path='/admission' element={<Admission />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
