import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Create from './pages/Create'
import Navbar from './Navbar'
import Post from './pages/Post';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blog/:id" element={<Post />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
