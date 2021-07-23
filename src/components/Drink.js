import React from 'react'
import { Link } from 'react-router-dom'


function Drink (props) {

            return (
                <li>
                    <Link to={`/recipe/${props.item.idDrink}`}>{props.item.strDrink}</Link>  
                </li>       
        )
}


export default Drink