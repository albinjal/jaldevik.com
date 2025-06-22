import HomePage from '@/pages/Home.tsx';
import PostPage from '@/pages/Post.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BackgroundAnimation from './components/BackgroundAnimation.tsx';
import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="from-background via-background to-background/95 relative flex min-h-screen flex-col bg-gradient-to-br">
        <BackgroundAnimation />
        <Navbar />
        <main className="relative z-10 flex flex-1 flex-col">
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<PostPage />} path="/blog/:slug" />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
