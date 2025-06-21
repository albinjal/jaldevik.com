import HomePage from '@/pages/Home';
import PostPage from '@/pages/Post';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
