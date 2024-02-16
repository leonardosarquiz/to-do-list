import React, { useState } from "react"

interface EditTodoFormProps {
  editTodo: (task: string, id: string) => void;
  task: {
    id: string;
    task: string;
  };
}


export function EditTodoForm({editTodo, task}:EditTodoFormProps) {


  const [value, setvalue] = useState(task.task)


  function handleSubmit(e: React.FormEvent):void {
    e.preventDefault();
    if (value.trim() !== "") {
      editTodo(value, task.id)
      setvalue("");
    } else {
      alert("Por favor, digite o nome da tarefa antes de editar!");
    }
   
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" placeholder="Edite sua tarefa!" onChange={(e) => setvalue(e.target.value)} value={value}/>
      <button type="submit" className="todo-btn">Editar tarefa</button>
    </form>
  )
}