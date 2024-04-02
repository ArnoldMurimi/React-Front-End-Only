import React from 'react'
import Header from './Header'
export default function TodoForm({AddTasks}) {
const [Input,setInput] =React.useState("")

function HandleChange(e){
    setInput(e.target.value)
    
 }
function HandleSubmit(e){
    e.preventDefault()
    AddTasks(Input)
    setInput("")
 }

  return (
    <div className='TodoFormContainer'>
        <Header/>
    <div className="TodoForm">
        <form onSubmit={HandleSubmit}>
            <button>Add</button>
            <input
            type='text'
            value={Input}
            placeholder='please Enter Tasks'
            onChange={HandleChange}
            />
        </form>
    </div>
    </div>
  )
}
