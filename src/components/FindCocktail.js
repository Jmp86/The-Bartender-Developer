import React, { Component } from 'react'

export default class FindCocktail extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            image: '',
            ingredient: '',
            recipe: ''
        }
    }    

    handleClick = (e) => {
        fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${this.state.ingredient}`, {
	            "method": "GET",
	            "headers": {
                    "x-rapidapi-key": "40bf57fa4amshd0014b2fc067c82p1fbb5ejsn04b68aa7a5b4",
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
	            }
        })  
        .then(res => res.json()) 
        .then(console.log)   
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <label>Search by Alcohol Type</label><br/>
                <input type="text" name="ingredient" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Search</button>
            </div>
        )
    }
}