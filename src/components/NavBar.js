import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


const link = {
    width: '100px',
    padding: '10px',
    margin: 'auto',
    background: 'black',
    color: 'white'
}

class NavBar extends Component {
    render(){
        return(
            <div>
                <NavLink
                    to='/'
                    exact
                    style={link}
                    activeStyle={{
                        background: 'blue'
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to='/cocktails'
                    exact
                    style={link}
                    activeStyle={{
                        background: 'blue'
                    }}
                >
                    Cocktails
                </NavLink>
                <NavLink
                    to='/search'
                    exact
                    style={link}
                    activeStyle={{
                        background: 'blue'
                    }}
                >
                    Search Cocktails
                </NavLink>
                <NavLink
                    to='/cocktails/new'
                    exact
                    style={link}
                    activeStyle={{
                        background: 'blue'
                    }}
                >
                    Add A Cocktail
                </NavLink>
            </div>
        )
    }
}
export default NavBar
