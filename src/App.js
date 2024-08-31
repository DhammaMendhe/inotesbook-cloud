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
import Alert from './Components/Alert';
import Login from './Components/loginSignup/Login';
import Signup from './Components/loginSignup/Signup';

function App() {
  return (
    <div className="App">
      <NotesStates>
        <Alert message={"this is going to be awosome..."}/>
        <Router>
          <Navbar />
          <Routes>

            <Route exact path='/home' element={<Home />} />
            <Route exact path='/about' element={<About />}/>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />}/>
          </Routes>
        </Router>
      </NotesStates>

    </div>
  );
}

export default App;
