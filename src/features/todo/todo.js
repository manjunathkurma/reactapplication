import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo } from "./todoSlice"
function Todo(){
    var [nt,setNT]=useState('')
    var {todos}=useSelector((state)=>{return state.t})
    var dispatch=useDispatch()
    return (
        <div className="dd">
            <h1>Todo</h1>
            <input type="text" onChange={(e)=>{setNT(e.target.value)}}/>
            <button onClick={()=>{dispatch(addTodo(nt))}}>addTodo</button>
            <ul>
                {
                    todos.map((t,i)=>{
                        return <li>{t}
                        <button onClick={()=>{dispatch(deleteTodo(i))}}>Del</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default  Todo