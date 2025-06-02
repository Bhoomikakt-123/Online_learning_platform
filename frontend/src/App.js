import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import LiveSessions from './pages/Livesessions'; // Fixed case sensitivity
import ForumPage from './pages/forumPage'; // Fixed case sensitivity
import MessagesPage from './pages/MessagesPage';
import NotFound from './pages/NotFound';
import './styles/App.css';

function App() {
  const location = useLocation();

  // Define routes where Navbar should be hidden
  const hideNavbarPaths = ['/login', '/register'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <div className="app">
      {shouldShowNavbar && <Navbar />}
      <main className="content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/live-sessions" element={<LiveSessions />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;