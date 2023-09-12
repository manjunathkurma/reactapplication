import React from "react";
import { connect } from "react-redux";
function Counter(props){
    console.log("Counter Props::",props)
    return(
        <div className="box">
            <h1>Counter :{props.c.count}</h1>
            <button onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:"DEC"})}}>Decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:"RESET"})}}>Reset</button>&nbsp;&nbsp;&nbsp;
        </div>
    )
}
export default connect(function(store){ return store})(Counter);