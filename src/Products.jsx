import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
function Products(){
    const [list,setList]=React.useState([])
    React.useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((pro)=>{
            console.log(pro.data)
            setList([...pro.data])
        })
    },[])
    return (
    <div>
        <ul className=' w-50'>
        {
            list.length>0 && list.map((p)=>{
                return  <div className="card m-5 ">
                <img src={p.image} style={{width:"8rem"}}/>
                <div className="card-body">
                  <h5>{p.title}</h5>
                  <p>{p.description}</p>
                  <a  className="btn btn-primary">₹ :{p.price}</a>
                </div>
              </div>
              
            })
        }

        </ul>
    </div>
    )
}
 

export default Products