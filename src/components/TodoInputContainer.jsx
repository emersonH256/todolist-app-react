import React, { Component } from 'react'
import TodoInput from './TodoInput'
import AddButton from './AddButton'

import './TodoInputContainer.css'

export default class TodoInputContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todoValue: ""
        }

        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleAddItem = this.onHandleAddItem.bind(this)
    
    }

    onHandleChange(e) {
        const todoValue = e.target.value
        this.setState({ todoValue: todoValue })

    }

    onHandleAddItem() {
        this.props.HandleAddItem(this.state.todoValue)
        this.setState({ todoValue: "" })
    }

    render() {
        return (
            <div className="todo-input-container">
                <TodoInput handleChange={this.onHandleChange} inputValue={this.state.todoValue}
                   enterPress={this.onHandleAddItem} />
                {/* <AddButton handleClick={this.onHandleAddItem} /> */}
            </div>
        )
    }
}