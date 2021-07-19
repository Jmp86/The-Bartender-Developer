import React from 'react'
import { Link } from 'react-router-dom'

function AddCocktail(){
    return(
        <Link to={'/cocktails/new'}>
            <button>Add a Cocktail</button>
        </Link>
    )
}
export default AddCocktail