import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import {Nav,Navbar} from 'react-bootstrap';
class Routes extends Component {
    render() { 
        return (
            <div>
                <Router>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link ><Link className="text-white" style={{textDecoration:"none"}} to="/"> Home</Link></Nav.Link>
                    <Nav.Link><Link className="text-white" style={{textDecoration:"none"}} to="/about"> About</Link></Nav.Link>
                    
                    </Nav>
                </Navbar>

                    <Switch>
                    <Route exact path="/" component={Home} />
                     
                    <Route  path="/about" component={About} />
                     
                </Switch>

                </Router>

            </div>
        );
    }
}
 
export default Routes;