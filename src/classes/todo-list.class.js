export class TodoList{
    constructor(){
        this.todos=[];
    }
    nuevoTodo(todo){
        this.todos.push(todo);
    }

    eliminarTodo(id){
        this.todos=this.todos.filter(todo => todo.id!=id);
        
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
        this.todos=this.todos.filter(todo => !todo.completado);
        
    }
}