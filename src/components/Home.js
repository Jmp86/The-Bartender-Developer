import React, { Component } from 'react'
import ViewCocktails from './ViewCocktails'

class Home extends Component {
    render(){
        return(
            <div>
                <h1>The Bartender Developer</h1>
                <ViewCocktails/>
            </div>
        )
    }
}
export default Home