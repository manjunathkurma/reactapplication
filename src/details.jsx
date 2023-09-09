import React, { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Details(){
    var {cname}=useParams();
    const [detail,setDetail]=useState(null)
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/name/'+cname).then((res)=>{
            setDetail({...res.data[0]})
        })
    },[cname])
    return (<div className="box">
        {
           detail &&(
            <div>
                {
                    detail.name.common
                }
            </div>
           )
        }
    </div>)

}
export default Details