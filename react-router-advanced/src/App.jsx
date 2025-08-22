
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Post from './components/Post';

// Simulated authentication state
const isAuthenticated = false; // Change to true to simulate logged-in user

function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/" replace />;
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
