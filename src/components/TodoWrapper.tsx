import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";



interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}



export function TodoWrapper() {

  const [todos, setTodos] = useState<TodoItem[]>([])


  function addTodo(todo: string): void {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false} ])
    console.log(todos)
  }

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}