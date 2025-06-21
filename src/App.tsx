import HomePage from '@/pages/Home';
import PostPage from '@/pages/Post';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
