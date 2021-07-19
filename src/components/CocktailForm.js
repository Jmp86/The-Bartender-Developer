import React, { Component } from 'react'

export default class CocktailForm extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            ingredients: '',
            recipe: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Cocktail Name:</label><br/>
                    <input type="text" name="name" onChange={this.handleChange}/><br/>
                    <label>Ingredients:</label><br/>
                    <textarea type="text" name="ingredients" onChange={this.handleChange}/><br/>
                    <label>Recipe:</label><br/>
                    <textarea type="text" name="recipe" onChange={this.handleChange}/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}