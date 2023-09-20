import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  increment,decrement,reset } from "./counterSlice";
function Counter(){
    var {count}=useSelector((state)=>{return state.c})
    var dispatch=useDispatch()
    return (
        <div >
        <h1>Counter:{count}</h1>
        <button onClick={()=>{dispatch(increment())}}>Inc</button>
        <button onClick={()=>{dispatch(decrement())}}>Dec</button>
        <button onClick={()=>{dispatch(reset())}}>Res</button>
        </div>
    )
}
export default Counter