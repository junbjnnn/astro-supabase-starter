import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { ScrollToTop } from './components/ScrollToTop';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/booking/:facility_id" element={<BookingPage />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;