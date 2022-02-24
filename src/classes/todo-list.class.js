export class TodoList{
    constructor(){
        // this.todos=[];
        this.cargarLocalStorage();
    }
    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos=this.todos.filter(todo => todo.id!=id);
        console.log(this.todos);
        this.guardarLocalStorage();
        
        }


    marcarCompletado(id){
        for (let i=0;i<this.todos.length;i++){
            const todo=this.todos[i];
            if (id==todo.id){
                todo.completado=!todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados(){
        this.todos=this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
        
    }

    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));

    }

    cargarLocalStorage(){
        // if (localStorage.getItem('todo')){
        //     this.todos=JSON.parse(localStorage.getItem('todo'));

        // }
        // else{
        //     this.todos=[];
        // }
        this.todos=(localStorage.getItem('todo')) 
        ? JSON.parse(localStorage.getItem('todo'))
        :[];

    }
}