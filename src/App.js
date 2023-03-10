import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';

import About from './components/About';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Notes from './components/Notes';


function App() {
  return (
    <>
        <NoteState>
         <Router>
          <Navbar />
          <div /*className="container"*/ >
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route  exact path="/about">
                <About/>
              </Route>
              <Route  exact path="/login">
                <Login/>
              </Route>
              <Route  exact path="/signup">
                <Signup/>
              </Route>
              <Route  exact path="/mynote">
                <Notes/>
              </Route>
                {/*<Route path="/users">
                <Users />
                </Route> */}
            </Switch>   
            </div>  
        </Router>
        </NoteState>
     
    </>
  );
}

export default App;
