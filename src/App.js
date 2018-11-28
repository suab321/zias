import React, { Component } from 'react';
import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom';
import {Route} from 'react-router';
import Mentor from './components/Mentor';
import Student from './components/Student';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';





class App extends Component {
  render() {
    return (
      <Router>
        <div className='headers'>
          <Route path='/student' component={Student}/>
           <Route path='/mentor' component={Mentor}/>
           <Route path='/home' component={Home}/>
           <Route path='/login' component={Login}/>
           <Route path='/register' component={Register}/>
           <Navbar inverse collapseOnSelect fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/home">Ziasy</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="/mentor">
        Student Form
      </NavItem>
      <NavItem eventKey={2} href="/student">
        Mentor Form
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="/login">
        Login
      </NavItem>
      <NavItem eventKey={2} href="/register">
        Register
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;
        </div>
      </Router>
    );
  }
}

export default App;
