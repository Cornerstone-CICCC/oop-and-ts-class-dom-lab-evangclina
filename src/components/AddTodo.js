import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class AddTodo extends Component {
  constructor(){
    super()
    this.todo = []
  }
  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `
    //capture input value
    const addBtn = addElement.querySelector("#todo-add-btn")
    const inputValue = addElement.querySelector("#todo-input")

    addBtn.addEventListener("click", () => {
      const description = inputValue.value
      if(description){
        const item = new TodoItem(description)
        this.todo.push(item)
        this.inputValue = ""
      }
    })

    return addElement;
  }
}