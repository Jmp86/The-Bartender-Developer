import React, { Component } from 'react'


class CocktailRecipe extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            image: '',
            ingredients: [],
            measurements: [],
            instructions: ''
        }
    }

    
    
    componentDidMount(){
        const id = this.props.match.params; 
        fetch("https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + id.id, {
          "method": "GET",
          "headers": {
              "x-rapidapi-key": "40bf57fa4amshd0014b2fc067c82p1fbb5ejsn04b68aa7a5b4",
              "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
          }
      })
      .then(res => res.json())
      .then(
        //   console.log
          recipe => this.setState({
          name: recipe.drinks[0].strDrink,
          image: recipe.drinks[0].strDrinkThumb,
          ingredients: [recipe.drinks[0].strIngredient1,
             recipe.drinks[0].strIngredient2, 
             recipe.drinks[0].strIngredient3,
             recipe.drinks[0].strIngredient4,
             recipe.drinks[0].strIngredient5,
             recipe.drinks[0].strIngredient6,
             recipe.drinks[0].strIngredient7,
             recipe.drinks[0].strIngredient8,
             recipe.drinks[0].strIngredient9,
             recipe.drinks[0].strIngredient10],
          measurements: [recipe.drinks[0].strMeasure1,
             recipe.drinks[0].strMeasure2, 
             recipe.drinks[0].strMeasure3,
             recipe.drinks[0].strMeasure4,
             recipe.drinks[0].strMeasure5,
             recipe.drinks[0].strMeasure6,
             recipe.drinks[0].strMeasure7,
             recipe.drinks[0].strMeasure8,
             recipe.drinks[0].strMeasure9,
             recipe.drinks[0].strMeasure10],
          instructions: recipe.drinks[0].strInstructions
      })
      )
      }

    render(){
        return(
            <div>
                <img src={this.state.image} alt={this.state.name}/>
                
                
            </div>
        )
    }
}
export default CocktailRecipe