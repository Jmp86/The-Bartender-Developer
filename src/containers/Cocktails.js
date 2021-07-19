import React, { Component } from 'react'
import AddCocktail from '../components/AddCocktail'


class Cocktails extends Component {
    constructor(){
        super()
        this.state = {
            cocktails: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/cocktails')
        .then(res => res.json())
        .then(cocktails => this.setState({ cocktails }))
    }
    
    render(){
        return(
            <div>
                <AddCocktail/>
            </div>
        )
    }
}
export default Cocktails