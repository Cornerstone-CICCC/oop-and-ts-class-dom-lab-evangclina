export class TodoContext {

    constructor(){
        this.todo = []
        this.listeners = []
    }
    
    //toggle complete 
    toggleComplete() {
        this.isComplete = !this.isComplete
    }

    // add todo 
    addToDo(description){
        this.todo.push(description)
        this.notifyListeners()
    }

    //delete todo
    deleteToDo(index){
        this.todo.splice(index, 1)
        this.notifyListeners()
    }

    //mark completed
    completeToDo(index){
        if(this.todo[index]){
            this.todo[index].toggleComplete()
            this.notifyListeners()
        }
    }

    getToDo(){
        return this.todo
    }

    subscribe(listener){
        this.listeners.push(listener)
    }

    notifyListeners(){
        this.listeners.forEach(listener => listener(this.todo))
    }

}