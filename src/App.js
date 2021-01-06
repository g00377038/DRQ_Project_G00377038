//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
//import { Header } from './components/header';
//import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css'; //for navbar
import {Navbar, Nav} from 'react-bootstrap'; //for navbar
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; //for routing
import { Library } from './components/library';
import { Calculator } from './components/calculator';
import { AddBook } from './components/addBook';
import { EditBook } from './components/editBook';

class App extends Component {
  render() {
    return (

      //wrap div with Router tag
      <Router>
        <div className="App">

          {/* create navigation bar */}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">G00377038</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/library">Library</Nav.Link>
              <Nav.Link href="/calculator">Calculator</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            {/* when path ends with "/", show content component */}
            <Route path='/' component={Content} exact />

            {/* when path ends with "/library", show library component */}
            <Route path='/library' component={Library} exact />

            {/* when path ends with "/calculator", show calculator component */}
            <Route path='/calculator' component={Calculator} exact />

            {/* when path ends with "/addBook", show addBook component */}
            <Route path='/addBook' component={AddBook} exact />

            {/* when path ends with "/editBook/:id", show EditBook component */}
            <Route path='/editBook/:id' component={EditBook} exact />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
