import React, { Component } from 'react'
import Ingredient from './Ingredient'
import Measurement from './Measurement'
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
             <ul>
                 {this.renderMeasurements()}{this.renderIngredients()}
             </ul>
         )
     }
}
export default IngredientList