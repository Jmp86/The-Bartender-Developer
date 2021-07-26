import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'


const link = {
    width: '100px',
    padding: '20px',
    margin: 'auto',
    background: 'black',
    color: 'white',
}

class NavBar extends Component {
    render(){
        return(
            <div className='NavBar'>
                <NavLink
                    to='/'
                    exact
                    style={link}
                    activeStyle={{
                        background: 'green'
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to='/cocktails'
                    exact
                    style={link}
                    activeStyle={{
                        background: 'green'
                    }}
                >
                    My Cocktails
                </NavLink>
                <NavLink
                    to='/search'
                    exact
                    style={link}
                    activeStyle={{
                        background: 'green'
                    }}
                >
                    Search Cocktails
                </NavLink>
                <NavLink
                    to='/cocktails/new'
                    exact
                    style={link}
                    activeStyle={{
                        background: 'green'
                    }}
                >
                    Add A Cocktail
                </NavLink>
            </div>
        )
    }
}
export default NavBar
