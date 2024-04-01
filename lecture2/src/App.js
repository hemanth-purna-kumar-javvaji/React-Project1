// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Newsapp from './components/Newsapp';
import Newscontent from './components/Newscontent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopLoadingBar from 'react-top-loading-bar';

function App() {
  const [Progress, setProgress] = useState(0); // Corrected variable name: setProgress
  return (
    <div className="App">
      <Router>
        <Newsapp />
        <TopLoadingBar progress={Progress} color="red" height="10" /> {/* Corrected prop name: progress */}
        <Routes>
          <Route path='/business' element={<Newscontent category1="Business" setprogress={setProgress} />} />
          <Route path='/entertainment' element={<Newscontent category1="Entertainment" setprogress={setProgress} />} />
          <Route path='/general' element={<Newscontent category1="General" setprogress={setProgress} />} />
          <Route path='/health' element={<Newscontent category1="Health" setprogress={setProgress} />} />
          <Route path='/science' element={<Newscontent category1="Science" setprogress={setProgress} />} />
          <Route path='/sports' element={<Newscontent category1="Sports" setprogress={setProgress} />} />
          <Route path='/technology' element={<Newscontent category1="Technology" setprogress={setProgress} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
