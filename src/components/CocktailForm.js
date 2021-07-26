import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../App.css'

class CocktailForm extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            ingredients: [],
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

            fetch(`http://localhost:3001/cocktails`, {
                method: "POST", 
                headers: {
                    "Content-type": "application/json", 
                    "Accept": "application/json"
                }, 
                body: JSON.stringify({
                  "name": e.target[0].value,
                  "ingredients": e.target[1].value.split('\n'),
                  "recipe": e.target[2].value
        
                })
            })
            .then(res => res.json())
            .then(console.log)
            this.props.history.push('/cocktails')
          }  
          

    render(){
        return(
            <div className='form' style={{ backgroundImage:"url(https://spiritofyork.com/wp-content/uploads/2020/05/image6-1.jpg)"}}>
                <form className='input' onSubmit={this.handleSubmit}>
                    <label>Cocktail Name:</label><br/>
                    <input type="text" name="name" onChange={this.handleChange}/><br/>
                    <label>Ingredients:</label><br/>
                    <textarea type="text" name="ingredients" onChange={this.handleChange} rows="6"/><br/>
                    <label>Recipe:</label><br/>
                    <textarea type="text" name="recipe" onChange={this.handleChange} rows="5"/><br/>
                    <input className='submit' type="submit"/>
                    
                </form>
            </div>
        )
    }
}
export default withRouter(CocktailForm)