import React, { Component } from 'react'

import TodoInputContainer from './TodoInputContainer'
import TodoListContainer from './TodoListContainer'

import '../Todo.css'
import Prancheta from '../imgs/prancheta.png'
export default class TodoApp extends Component {

    constructor(props) {
        super(props)
        this.AddItem = this.AddItem.bind(this)
        this.RemoveItem = this.RemoveItem.bind(this)
        this.state = {
            todos: []
        }
    }

    AddItem(item) {
        const newTodos = this.state.todos
        newTodos.push(item)
        this.setState({ todos: newTodos })

    }

    RemoveItem(index) {
        const newTodos = this.state.todos.filter((item, ind) => ind !== index)
        this.setState({ todos: newTodos })
    }

    render() {
        return (
            <div className="todo-app">
                 <img src={Prancheta} className="todo-app-prancheta-img" alt="" />
                <h1 className="todo-app-title">TodoApp</h1>
                <TodoInputContainer HandleAddItem={this.AddItem} />
                <TodoListContainer todos={this.state.todos} HandleRemoveItem={this.RemoveItem} />
            </div>
        )
    }

}