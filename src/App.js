import './App.css';
import NavBar from './components/nav-bar/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Gallery from './components/pages/Gallery';
import Resume from './components/pages/Resume';
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </div>
    </div>
  );

}

export default App;
