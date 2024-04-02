import React from 'react'

export default function Task({name,done,onRename,onDelete,OnUpdateTask }) {
  const [EditMode,setEditMode] = React.useState(false)
  const [Checked,setChecked] = React.useState(false)
  function ToogleEdit(){
  setEditMode(prevstate => !prevstate)
  }
  function HandleSubmit(e){
  e.preventDefault()
  setEditMode(false)
  }
  
  function  changeDoneState(){
  setChecked(prevstate=> !prevstate)
  OnUpdateTask(!done)

  }

  
    //  <CheckBox onClick= {()=>OnUpdateTask(!done)}
  //  Checked ={done} />
  // how to directly change the boolean state directly
  return (
    <div className='TaskContainer'>
  
        <button
         onClick={changeDoneState}>
          { Checked ?"Checked":"Unchecked"}</button>
        {!EditMode && 
         <div className="TaskName">
          <span>{name}</span>
         </div>
          }
         {EditMode &&
         <form onSubmit ={HandleSubmit}>
            <input
           type= "text"
           value={name}
           onChange={ e => onRename(e.target.value)}
         />

         </form>
       
         }
          <button onClick ={ToogleEdit}>Edit</button>
          <button onClick ={onDelete}>Delete</button>
    </div>
  )
}
