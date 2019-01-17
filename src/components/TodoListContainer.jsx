import React, { Component } from 'react'
import TodoItem from './TodoItem'
import './TodoListContainer.css'
export default class TodoListContainer extends Component {

    constructor(props) {
        super(props)
        this.onHandleClick = this.onHandleClick.bind(this)
    }

    onHandleClick(index) {
        this.props.HandleRemoveItem(index)
    }

    render() {

        return (
            <div className="todo-list-container">
                <ul>
                    {this.props.todos.map((todo, index) =>
                        <TodoItem item={todo} key={index} id={index}
                            handleClick={this.onHandleClick} />)}
                </ul>

            </div>
        )
    }
}