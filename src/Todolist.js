import React ,{useState}from "react";
import { connect } from "react-redux";
function Todolist(props){
    console.log("Todolist::",props)
    var [nt,setNT]=useState("")
    return(
        <div className="box">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNT(e.target.value)}}/> 
            <button onClick={()=>{props.dispatch({type:"ADDTODO",payload :nt})}}>Add Todo</button>
            {props.t.todos.map((todo,i)=>{
                return <li>{todo}</li>
            })}
        </div>
    )
}
export default connect(function(store){return store})(Todolist);