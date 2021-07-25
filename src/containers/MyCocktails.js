import React, { Component } from 'react'
import AddCocktail from '../components/AddCocktail'
import { Link } from 'react-router-dom'

class Cocktails extends Component {
    constructor(){
        super()
        this.state = {
            cocktails: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/cocktails')
        .then(res => res.json())
        .then(cocktails => this.setState({ cocktails }))
    }

    renderCocktails(){
        return this.state.cocktails.map(cocktail => 
            <div>
            <h2>{cocktail.name}</h2>
            <h3>Ingredients</h3>
            <ul>
                {cocktail.ingredients.map(ing => <li>{ing}</li>)}
            </ul>
            <h3>Instructions</h3>
            <p>{cocktail.recipe}</p>
            </div>
            )
    }

    
    render(){
        return(
            <div>
                {this.renderCocktails()}
                <AddCocktail/><br/>
                <Link to="/search"> Search for Cocktails</Link>
            </div>
        )
    }
}
export default Cocktails