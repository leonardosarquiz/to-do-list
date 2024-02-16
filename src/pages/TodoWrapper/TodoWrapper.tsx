import './styles.css'
import { useEffect, useState } from "react";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../../components/Todo/Todo";
import { EditTodoForm } from "../../components/EditForm/EditTodoForm";



interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}



export function TodoWrapper() {

  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });


  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []); 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  function addTodo(todo: string): void {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false} ])
    
  }

  function toggleComplete(id: string): void {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id: string): void {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function editTodo(id: string): void {
   setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  function editTask(task: string, id: string): void {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }

  return (
    <div className="TodoWrapper">
      <h1>Lista de Afazeres</h1>
      <TodoForm addTodo={addTodo}/>
     {todos.map((todo, index) => (
      todo.isEditing ? (
           <EditTodoForm editTodo={editTask} task={todo}/>
      ) :
      (
        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
      )
     
     ))}
    </div>
  )
}