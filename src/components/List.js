import React, { Component } from 'react'
import Item from './Item'


class List extends Component {

    renderItems() {
        if(Array.isArray(this.props.cocktails)){
        return this.props.cocktails.map(item => <Item key={item.strDrink} item={item}/>)
    } else {
        return <li>Not a valid ingredient</li>
    }
}

    render(){
        return (
                <ul>
                    {this.renderItems()}
                </ul>
        )
    }
}

export default List 
