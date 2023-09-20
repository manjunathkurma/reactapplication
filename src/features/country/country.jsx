import React from "react";
import { useGetAllCountryQuery } from "../../service/countryApi";
import { Outlet,Link } from "react-router-dom";
function Country(){
    var {isLoading,data}=useGetAllCountryQuery()
  
return (
    <div className="box d-flex flex-wrap">
         <div className=" w-50">
        <h1>Country</h1>
       
            {
                isLoading && (<h3>Loading...</h3>)
            }
            {
                !isLoading && (
                data.map((a)=>{
                    return <li>
                        <Link to={a.name.common}>{a.name.common}</Link>
                        </li>
                })
                )
            }
            </div>
    <div className=" w-50">
        <Outlet></Outlet>
        </div>
    </div>
)
}
export default Country