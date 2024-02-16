import {NotePencil, Trash} from "@phosphor-icons/react"
import './styles.css'

interface TodoProps {
  task: {
    id: string;
    task: string;
    completed: boolean;
   
  };
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
}


export function Todo({task, toggleComplete, deleteTodo, editTodo}:TodoProps) {
  return (
    <div className="Todo">
     <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
     <div>
       <NotePencil className="icon-btn" size={28} onClick={() => editTodo(task.id)}/>
       <Trash className="icon-btn" size={28} onClick={() => deleteTodo(task.id)}/>
     </div>
   </div>
  )
}