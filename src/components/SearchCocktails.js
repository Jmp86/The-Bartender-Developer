import React, { Component } from 'react'
import DrinkList from './DrinkList'


export default class SearchCocktails extends Component {
    constructor(){
        super()
        this.state = {
            cocktails: [],
            ingredient: ''
        }
    }    

//     componentDidMount(){
//         fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=rum`, {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-key": "40bf57fa4amshd0014b2fc067c82p1fbb5ejsn04b68aa7a5b4",
//                 "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
//             }
//     })  
//     .then(res => res.json()) 
//     .then(cocktails => this.setState({ cocktails: cocktails.drinks, ingredient: 'Rum' })) 
//     .catch(error => {
//         throw(error);
//     }) 
// }


    handleClick = (e) => {
        fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${this.state.ingredient}`, {
	            "method": "GET",
	            "headers": {
                    "x-rapidapi-key": "40bf57fa4amshd0014b2fc067c82p1fbb5ejsn04b68aa7a5b4",
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
	            }
        })  
        .then(res => res.json()) 
        .then(cocktails => this.setState({ cocktails: cocktails.drinks })) 
        .catch(error => {
            throw(error);
        }) 
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleKeypress = (e) => {
      if (e.charCode === 13) {
        this.handleClick()
        console.log(e)
      } else {
          return null
      }
    }


    render(){
        return(
            <div>
                <label>Search by Ingredient</label><br/>
                <input type="text" name="ingredient" onChange={this.handleChange} onKeyPress={this.handleKeypress}/>
                <button onClick={this.handleClick} >Search</button>
                <h2>{this.state.ingredient.toUpperCase()}</h2>
                <DrinkList cocktails={this.state.cocktails}/>
            </div>
        )
    }
    }

