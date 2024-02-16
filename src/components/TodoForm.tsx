import React, { useState } from "react"

interface TodoInterface {
  addTodo: (todo: string) => void;
}


export function TodoForm({addTodo}:TodoInterface) {


  const [value, setvalue] = useState("")


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
   addTodo(value)
   setvalue("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" placeholder="Qual a tarefa de hoje?" onChange={(e) => setvalue(e.target.value)} value={value}/>
      <button type="submit" className="todo-btn">Adicionar tarefa</button>
    </form>
  )
}