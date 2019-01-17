import React, { Component } from 'react'
import './TodoItem.css'

export default class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.OnHandleClick = this.OnHandleClick.bind(this)
    }

    OnHandleClick(e) {
        this.props.handleClick(this.props.id)
        console.log(e)
    }

    render() {
        return (
            <li className="todo-item" onClick={this.OnHandleClick}> {this.props.item} </li>
        )
    }
}