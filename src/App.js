import './App.css';
import NavBar from './components/nav-bar/NavBar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';
import Resume from './components/pages/resume/Resume';
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
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </div>
    </div>
  );

}

export default App;
