import React from 'react'
import TodoForm from './TodoList/TodoForm'
import Task from './TodoList/Task'
import {nanoid} from 'nanoid'
export default function App() {
  const [Tasks,setTasks] = React.useState([])
  


function AddTasks(name){
   setTasks(prevstate => {
    return [...prevstate,{name:name,done:false,id:nanoid()}]
   })}

   function onRename(newName,index){
    setTasks(prevstate => {
      const Task = [...prevstate]
      Task[index].name =newName
      return Task
    })
   }

   function onDelete(indexDeleted){
    setTasks(prevstate =>{
      return prevstate.filter((taskObject,index)=>index !== indexDeleted )
      //how does the filter meant to delete work
      // what is the taskobject
      //what does it mean 
    })}
   
    function OnUpdateTask(NewDone,index){
     setTasks(prevstate => { 
     const Task = [...prevstate]
     Task[index].done = NewDone
     return Task
      
  

    })


    const NumberOfCompletedTask = Tasks.filter(task => task.done).length + 1
    console.log(NumberOfCompletedTask)

    const TotalTasks = Tasks.length

    console.log(TotalTasks)

    }
  return (
    <div>
      <main>
      <TodoForm AddTasks = {AddTasks}/>
      {Tasks.map((task,index)=>
      <Task {...task} key = {task.id}
      onRename = { newName => onRename(newName,index)}
      onDelete=  {()=>onDelete(index)}
      //passing functions as reference in connection to
      //parameters
      OnUpdateTask ={ done =>OnUpdateTask(done,index)}
      />
      )}
      
      </main>
      
    </div>
  )
}
