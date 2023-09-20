import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return (
        <div >
            <h1>
            <nav class="navbar navbar-expand-lg bg-danger">
  <div class="container-fluid">
    <Link class="navbar-brand" to='/'>Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/country'>country</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/counter">Counter</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/todo">TodoList</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="books" >Books</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </h1>
        </div>
    )
}
export default Header