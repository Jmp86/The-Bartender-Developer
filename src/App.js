import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import React from 'react'
import Cocktails from './containers/Cocktails'
import Home from './components/Home'
import NavBar from './components/NavBar'
import CocktailForm from './components/CocktailForm'
import SearchCocktails from './components/SearchCocktails'
import CocktailRecipe from './containers/CocktailRecipe'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/cocktails' component={Cocktails}/>
          <Route exact path='/cocktails/new' component={CocktailForm}/>
          <Route exact path='/search' component={SearchCocktails}/>
          <Route exact path='/recipe/:id' component={CocktailRecipe}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
