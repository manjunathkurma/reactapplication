import React from "react";
import axios from "axios";
function Vacation(){
    const [tour,setTour]=React.useState([])
    React.useEffect(()=>{
    axios.get('https://course-api.com/react-tours-project').
    then((res)=>{
        console.log(res.data)
        setTour([...res.data])
    })
  },[])
    
    return(
      <div>{
        tour.map((a)=>{
          return <div class='box'>
            <img src={a.image} alt="" class='img' />
            <h3>{a.name}</h3>
          <p>{a.info}</p>
          <span>$ :{a.price}</span><br />
  
          </div>
        })
        }</div>
    )
}

export default Vacation;