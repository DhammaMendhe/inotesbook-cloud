import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NotesStates from './Context/NotesStates';


function App() {
  return (
    <div className="App">
      <NotesStates>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </Router>
      </NotesStates>

    </div>
  );
}

export default App;
