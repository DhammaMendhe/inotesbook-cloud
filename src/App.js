import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NotesStates from './Context/NotesStates';
import Alert from './Components/Alert';
import Login from './Components/loginSignup/Login';
import Signup from './Components/loginSignup/Signup';
// import LoginUser from './Components/LoginUser'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginUser from './Components/LoginUser';

function App() {
  const [alert,setalert] = useState(null);


  const showalert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);

  }
  return (
    <div className="App">
      <NotesStates>
        <Alert alert={alert}/>
        <Router>
          <Navbar />
          
          <Routes>

            <Route exact path='/home' element={<Home showalert={showalert} />} />
            <Route exact path='/about' element={<About showalert={showalert}/>}/>
            <Route exact path='/login' element={<Login showalert={showalert}/>} />
            <Route exact path='/signup' element={<Signup showalert={showalert}/>}/>
            <Route exact path='/loginUser' element={<LoginUser showalert={showalert}/>}/>

          </Routes>
        </Router>
      </NotesStates>

    </div>
  );
}

export default App;
