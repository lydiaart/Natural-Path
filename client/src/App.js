import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <>
<Nav/>
      <Router>

        <Route exact path="/"  >
          <Home/>
        </Route>
      </Router>

    </>
  );
}

export default App;
