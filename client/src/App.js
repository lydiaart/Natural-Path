import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Service from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/About';
import MyAccount from './pages/SignUpLogIn';
import Footer from './components/Footer';
import Scheduler from './pages/Scheduler';


function App() {
  return (
    <div className="App">
      <Nav />
      <Router>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/services" >
          <Service />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/signuplogin">
        <MyAccount />
        </Route>
        <Route exact path="/scheduler">
          <Scheduler />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
