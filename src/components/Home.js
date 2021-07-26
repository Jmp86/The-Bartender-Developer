import React, { Component } from 'react'
import ViewCocktails from './ViewCocktails'
import '../App.css'

class Home extends Component {
    render(){
        return(
            <div className='home' style={{ backgroundImage:`url(https://images.unsplash.com/photo-1502819126416-d387f86d47a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80)` }}>
                <h1 style={{ backgroundColor: 'black'}}>The Bartender Developer</h1>
                <ViewCocktails/>
            </div>
        )
    }
}
export default Home