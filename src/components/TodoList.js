import { Component } from "../common/Component.js";
import { TodoContext } from "../contexts/TodoContext.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = { todo: []}
  }

  render() {
    const todoListElement = document.createElement('div')
    todoListElement.className = "todo-list"
    todoListElement.innerHTML = ""
    
    const todos = this.state.todo

    todos.forEach(todo => {
      const todoItem = new TodoItem({
        todo, 
        todoContext: this.props.todoContext
      })

      todoItem.appendChild(productItem.render())
    });

    return todoListElement;
  }
}