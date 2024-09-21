import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props){
    super(props)
    this.handleAddToDo = this.handleAddToDo.bind(this)
  }
  
  handleAddToDo(){
    this.props.todoContext.addToDo(this.props.todo)
  }

  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"

    todoElement.innerHTML = `
    <div>
      <p>${this.props.description}</p>
      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    </div>
    `
    todoElement.querySelector(".complete-btn").addEventListener("click",)
    todoElement.querySelector(".delete-btn").addEventListener("click",)
    return todoElement;
  }
}