import './App.css';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Loading from './assets/components/Loading';
import NotFound from './assets/components/Notfound';
import Navbar from './pages/Navbar';

// Lazy load the page components
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'));

const App: React.FC = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/Services' },
    { name: 'About Us', path: '/AboutUs' },
    { name: 'Contact Us', path: '/ContactUs' }
  ];

  // Get current location
  const location = useLocation();

  // Check if current location is not included in navLinks
  const isInvalidPage = !navLinks.some(link => link.path === location.pathname);

  return (
    <>
      {!isInvalidPage && <Navbar links={navLinks} />}
      <Routes>
        <Route
          element={
            <Suspense
              fallback={
                <div className="flex items-center h-[400px] w-full justify-center">
                  <Loading />
                </div>
              }
            >
              <Outlet />
            </Suspense>
          }
          errorElement={<Loading />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
