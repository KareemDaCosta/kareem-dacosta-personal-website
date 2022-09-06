import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import NotFound from '../NotFound/NotFound';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Experience from "../Experience/Experience"
import Projects from "../Projects/Projects"
import Education from "../Education/Education"
import Skills from "../Skills/Skills"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path ="/education" element={<Education />} />
          <Route path ="/skills" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}