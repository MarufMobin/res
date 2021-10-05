import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import  NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
        <Switch>
          {/* Home page */}
          <Route exact path="/">
              <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>
          {/* Service Page */}
          <Route exact path="/services">
            <Service></Service>
          </Route>

            {/* About Page */}
          <Route exact path="/about">
            <About></About>
          </Route>

            {/* Contact Page */}
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

            {/* Error Page */}
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer> 
      </Router>
    </div>
  );
}

export default App;
