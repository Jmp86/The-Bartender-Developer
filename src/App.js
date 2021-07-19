import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import React from 'react'
import Cocktails from './containers/Cocktails'
import Home from './components/Home'
import NavBar from './components/NavBar'
import CocktailForm from './components/CocktailForm'
import FindCocktail from './components/FindCocktail'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/cocktails' component={Cocktails}/>
          <Route exact path='/cocktails/new' component={CocktailForm}/>
          <Route exact path='/findcocktail' component={FindCocktail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
