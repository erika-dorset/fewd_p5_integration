import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'bulma/css/bulma.css'
import Particles from './Particles';
import Snowflake from './Snowflake';
import Glitch from './Glitch';

class First extends React.Component {
  render() {
    return(
      <div className="section">
        <h2 className="title">Particles</h2>
        <Particles />
      </div>
    );
  }
}

class Second extends React.Component {
  render() {
    return(
      <div className="section">
        <h2 className="title">Snowflakes</h2>
        <Snowflake />
      </div>
    );
  }
}

class Third extends React.Component {
  render() {
    return(
      <div className="section">
        <h2 className="title">Glitch</h2>
        <Glitch />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <ul className="navbar-start">
            <li className="navbar-item"><Link to="/">Particles</Link></li>
            <li className="navbar-item"><Link to="/snowflake">Snowflakes</Link></li>
            <li className="navbar-item"><Link to="/third">Glitch</Link></li>
        </ul>
    </nav>
        <hr/>
        <Route exact path="/" component={First}/>
        <Route exact path="/snowflake" component={Second}/>
        <Route exact path="/third" component={Third}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);