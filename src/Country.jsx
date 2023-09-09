import React, { useEffect,useState } from "react";
import axios from "axios";
import  {Link, Outlet } from 'react-router-dom'
function Country(){
    
    const [country,setCountry]=useState([])
    useEffect(()=>{
        axios.get('https://restcountries.com/v3/all').then((res)=>{
            console.log(res.data)
            setCountry(res.data)
        })
    },[])
    return (
     <div className="box display">
        <div className='box'> 
            
             {
                country.length>0 && country.map((a,i)=>{
                    return <li>
                        <Link key={i} to={'detail/'+a.name.common}>{a.name.common}</Link>
                        </li>
                })
             }
           
        </div>
        <div> 
            <Outlet/>
        </div>
     </div>

    )
    
   

}
export default Country 
