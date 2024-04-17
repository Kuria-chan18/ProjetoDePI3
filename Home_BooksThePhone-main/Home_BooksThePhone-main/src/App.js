import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Biblioteca from './components/pages/Biblioteca'
import Carrinho from './components/pages/Carrinho'
import Menu from './components/pages/Menu'
import Destaques from './components/pages/Destaques'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass = "min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Destaques">
            <Destaques />
          </Route>
          <Route exact path="/Biblioteca">
            <Biblioteca />
          </Route>
          <Route exact path="/Carrinho_de_compras">
            <Carrinho />
          </Route>
          <Route exact path="/Menu">
            <Menu />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
