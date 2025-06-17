// import Header from "./components/header.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import AcademicsPage from './components/academic/AcademicsPage.jsx'
import AllCourses from './components/academic2/AllCourses.jsx';
import AcademicsPage3 from './components/academic3/AcademicPage3.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AcademicsPage />} />
        <Route path="/AllCourses" element={<AllCourses />} />
        <Route path="/academic_page_3" element={<AcademicsPage3/> } />
      </Routes>
    </Router>
  );
}

export default App;