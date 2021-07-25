import React, { Component } from 'react'
import Ingredient from './Ingredient'
import Measurement from './Measurement'
import '../App.css'

class IngredientList extends Component {

    renderIngredients(){
        return this.props.ingredient.filter(string => typeof string === 'string').map(item => 
        <Ingredient key={item} item={item}/>)
     }

     renderMeasurements(){
         return this.props.measurement.filter(string => typeof string === 'string').map(item => 
            <Measurement key={item} item={item}/>)
     }
     
     render(){
         return(
             <div className="ingredientList">
                 {this.renderMeasurements()}
                 {this.renderIngredients()}
             </div>
         )
     }
}
export default IngredientList