import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Counter from "./features/counter/counter";
import Todo from "./features/todo/todo";
function App(){
  return (
    <Provider store={store}> 
      <div className="box">
      <h1>Welcome</h1>
    <Counter></Counter>
    <Todo></Todo>
    </div>
    </Provider>
  )
}
export default App