import React from 'react'
import { Link } from 'react-router-dom'

function ViewCocktails(){
    return(
        <Link to={'/cocktails'}>
            <button>Check Out Some Cocktails</button>
        </Link>
    )
}
export default ViewCocktails