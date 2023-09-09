import {Link, Outlet } from "react-router-dom";
import Country from "./Country";
function App() {
  return (
    <div className="box">
      <Link to='/country'>country</Link>
      <Outlet></Outlet>
   
    </div>
  );
}

export default App;
