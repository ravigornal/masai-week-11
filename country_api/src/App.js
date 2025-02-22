import React from 'react';
import './App.css';
import Country from './components/country';
import Form from './components/form'
import Data from './components/Data'
import { BrowserRouter as Router,Route ,Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <h1><Link style={{textDecoration: "none"}} to='/'>Country</Link></h1>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <Link to="/show/data" class="btn btn-outline-primary" style={{marginLeft:"100px"}}>Data</Link>
              <Link to="/xx" class="btn btn-outline-primary" style={{marginLeft:"100px"}}>Add Info</Link>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <Route path="/" exact component={Country}/>
        <Route path="/show/data"  component={Data}/>
        <Route path="/:country" exact component={Form}/>
      </div>
    </Router>
  );
}

export default App;
