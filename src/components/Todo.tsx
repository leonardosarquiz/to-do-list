import {NotePencil, Trash} from "@phosphor-icons/react"

export function Todo() {
  return (
    <div className="Todo">
     <p>Go to school</p>
     <div>
       <NotePencil size={32} />
       <Trash size={32} />
     </div>
   </div>
  )
}