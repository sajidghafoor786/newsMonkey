// App.js
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/pages/Home';
import NewsBoard from './components/NewsBoard';
import { useState } from 'react';

function App() {
  const [ setCategory] = useState("general");

  return (
    <>
      <Router>
        <Navbar setCategory={setCategory} />
        <div className="mx-5">
          <Routes>
            <Route path="/" element={<NewsBoard category="general" />} />
            {/* Add different components for different paths */}
            <Route path="/general" element={<NewsBoard category="general" />} />
            <Route path="/health" element={<NewsBoard category="health" />} />
            <Route path="/business" element={<NewsBoard category="business" />} />
            <Route path="/technology" element={<NewsBoard category="technology" />} />
            <Route path="/sports" element={<NewsBoard category="sports" />} />
            <Route path="/science" element={<NewsBoard category="science" />} />
            <Route path="/entertainment" element={<NewsBoard category="entertainment" />} />
            {/* Add more routes for different categories as needed */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
