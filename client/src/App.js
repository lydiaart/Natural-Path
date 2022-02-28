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
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Product from './pages/Product';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
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
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
      </Router>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
