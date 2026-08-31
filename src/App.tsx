import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Academics from './pages/Academics/Academics';
import Admissions from './pages/Admissions/Admissions';
import Campus from './pages/Campus/Campus';
import StudentLife from './pages/StudentLife/StudentLife';
import Faculty from './pages/Faculty/Faculty';
import Gallery from './pages/Gallery/Gallery';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Alumni from './pages/Alumni/Alumni';
import Careers from './pages/Careers/Careers';
import Calendar from './pages/Calendar/Calendar';
import Parents from './pages/Parents/Parents';
import NoticeBoard from './pages/NoticeBoard/NoticeBoard';
import VirtualTour from './pages/VirtualTour/VirtualTour';
import FAQ from './pages/FAQ/FAQ';
import Results from './pages/Results/Results';
import Scholarships from './pages/Scholarships/Scholarships';
import Blog from './pages/Blog/Blog';
import Publications from './pages/Publications/Publications';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px',
    }}>
      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '6rem',
        color: 'var(--gold)',
        lineHeight: 1,
        marginBottom: '20px',
      }}>404</h1>
      <h2 style={{ color: 'var(--navy)', marginBottom: '16px' }}>Page Not Found</h2>
      <p style={{ color: 'var(--gray-600)', marginBottom: '32px', maxWidth: '400px' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="btn btn-primary">Return to Home</a>
    </div>
  );
}

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navHeight = isHome ? 0 : 108;

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: isHome ? 0 : navHeight }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/notice-board" element={<NoticeBoard />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/results" element={<Results />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
      <ChatWidget />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
