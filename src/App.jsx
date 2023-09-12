import React from "react";
import Counter from "./Counter";
import store from "./store/store";
import Todolist from "./Todolist";
import { Provider } from "react-redux";
function App(){
  return(
    <Provider store={store}>
    <div className="box">
      <h1>Welcome to ReactJS Training</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
    </Provider>
  )
}
export default App;