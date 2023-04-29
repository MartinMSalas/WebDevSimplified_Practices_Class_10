import { useState } from "react"

export function TodoListItem({isComplete, children}){
  const [isChecked, setIsChecked] = useState(isComplete)
  
  const handleCheck = () => {
    setIsChecked(isChecked => !isChecked)
  }
  return(
      <div>
          <label htmlFor="checkb">{children}
            <input onChange={handleCheck} id="checkb" defaultChecked={isComplete} type="checkbox"></input>
          </label>
          <h2>The input is {isChecked ? "completed":"Not completed"}</h2>
      </div>
      
  ) 
}