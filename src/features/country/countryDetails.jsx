import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllCountryDetailesQuery } from "../../service/countryApi";
function CountryDetails(){
    var x=useParams()
    var {isLoading,data}=useGetAllCountryDetailesQuery(x.cname)
    return (
        <div className="p-4">
            <h1>Country</h1>
            {
                isLoading && (<h1>loading</h1>)
            }
            {
                !isLoading && (
                    data.map((a)=>{
                        return <li>
                            
                            {a.name.common}</li>
                    })
                )
            }
        </div>
    )
}
export default CountryDetails