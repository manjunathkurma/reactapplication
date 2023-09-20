import React from "react";
import { useGetAllBooksQuery } from "../../service/booksApi";
import { Link, Outlet } from "react-router-dom";
function Books(){
    var {isLoading,data}=useGetAllBooksQuery()
   console.log(data)
    return (
        <div>
            <h1>Books</h1>
            <Link to='addbook'><button>Add</button></Link>
            
            {
                isLoading && (<h1>loading</h1>)
            }
            
            <div className="d-flex flex wrap">
                <div className="w-50">            {
                !isLoading && (
                    data.map((a)=>{
                        return <li>
                            <h3>{a.title}</h3>
                            <h2>{a.author}</h2>

                        </li>
                    })
                )
            }
            </div>

        
            <div>
                <Outlet></Outlet>
            </div>
            </div>

    </div>
        
    )
}
export default Books