import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import NotFound from '../NotFound/NotFound';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from '../Home/Home';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}