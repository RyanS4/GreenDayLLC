import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import LawnPrograms from './Pages/LawnPrograms';

function App() {
  return (
    <BrowserRouter>
      <nav hidden>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/lawn-programs">Lawn Programs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lawn-programs" element={<LawnPrograms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
