import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";
import { useHistory } from "react-router-dom";
import Drop from './components/Drop';
import Cat from './components/Cat';
import "./App.css";



function App() {
  let history = useHistory();

  //function handleClick(){ history.push("/login")}

  return (
    <Router>
      <div className="App" style = {{width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>Hey Friend...s?</h1>

        <Drop>

        </Drop>

        <Switch>

          <Route path="/catAttack" component={Cat}/>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route component={Login} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;