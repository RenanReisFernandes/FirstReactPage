import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Destinos from './components/pages/Destinos'
import Promocoes from './components/pages/Promocoes'
import Contact from './components/pages/Contact'
import Cadastro from './components/pages/Cadastro'
import Login from './components/pages/Login'

import Containere from './components/Layout/Containere'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Viagens from './components/pages/Viagens'
import Cadastradas from './components/pages/Cadastradas'


function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
      <Containere customClass="min-height">

        <Route exact path="/">
          <Home />
        </Route>
     
        <Route exact path="/company">
          <Company />
        </Route>

        <Route exact path="/destinos">
          <Destinos />
        </Route>

        <Route exact path="/promocoes">
          <Promocoes />
        </Route>
        
        <Route exact path="/contact">
          <Contact />
        </Route>
      
        <Route exact path="/cadastro">
          <Cadastro />
        </Route>
        
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/viagens">
          <Viagens />
        </Route>

        <Route exact path="/cadastradas">
          <Cadastradas />
        </Route>
            
        </Containere>
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
