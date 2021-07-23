import React, { Component } from 'react'


class CocktailRecipe extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            image: '',
            ingredients: '',
            recipe: ''
        }
    }
    

    render(){
        return(
            <div>
                
                {console.log(this.props)}
            </div>
        )
    }
}
export default CocktailRecipe