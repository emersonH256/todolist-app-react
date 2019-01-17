import React, { Component } from 'react'
import './TodoInput.css'

export default class TodoInput extends Component {

    constructor(props) {
        super(props)
    
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onKeyEnterHandler = this.onKeyEnterHandler.bind(this)

    }

    handleInputChange(e) {
        this.props.handleChange(e)
    }

    onKeyEnterHandler(e) {
        if (e.charCode === 13) {
            this.props.enterPress()
        }
    }

    render() {
        return (
            <input  type="text" value={this.props.inputValue} className="todo-input"
             onChange={e => this.handleInputChange(e)} onKeyPress={this.onKeyEnterHandler} />
        )
    }
}