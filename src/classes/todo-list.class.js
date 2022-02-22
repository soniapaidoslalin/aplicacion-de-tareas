export class TodoList{
    constructor(){
        this.todos=[];
    }
    nuevoTodo(todo){
        this.todos.push(todo);
    }

    eliminarTodo(id){

    }

    marcarCompletado(id){
        for (let i=0;i<this.todos.length;i++){
            const todo=this.todos[i];
            if (id==todo.id){
                todo.completado=!todo.completado;

                break;
            }
        }

    }

    eliminarCompletados(){
        
    }
}