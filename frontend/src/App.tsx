// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import About from './pages/About';
import Approach from './pages/Approach';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Partner from './pages/Partner';
import Services from './pages/Services';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="approach" element={<Approach />} />
        <Route path="partner" element={<Partner />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}