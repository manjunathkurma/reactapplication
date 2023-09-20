import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Counter from "./features/counter/counter";

import Header from "./shared/header";
import { Outlet } from "react-router-dom";
function App(){
  return (
    <Provider store={store}> 
      <div className="box">
        <Header></Header>
      <Outlet></Outlet>
    
    </div>
    </Provider>
  )
}
export default App