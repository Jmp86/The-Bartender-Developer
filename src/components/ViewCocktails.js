import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function ViewCocktails(){
    return(
        <Link to={'/search'}>
            <button className="button">Find Cocktail Recipes</button>
        </Link>
    )
}
export default ViewCocktails