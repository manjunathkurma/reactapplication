import React, { useEffect, useState } from "react";
import axios from "axios";
function Books(){
    var [book,setBook]=useState([])
    var [nbook,setNbook]=useState({title:'',author:''})
    var [edits,setEdits]=useState(false)
    var [select,setSelect]=useState(null)
    useEffect(()=>{
    getb()
},[])
function adds(){
    axios.post('http://localhost:4000/books',nbook).then((res)=>{
        console.log(res)
        getb()
    })
}
function getb(){
    axios.get("http://localhost:4000/books").then((res)=>{
         console.log(res.data)
         setBook([...res.data])
    })
}
function del(id){
    axios.delete("http://localhost:4000/books/"+id)
    getb()
}
function edit (a){
    setSelect({...a})
    setEdits(true)
}
function update (){
    axios.put('http://localhost:4000/books/'+select.id,select)
    getb()
}
return (
    <div className="dd">
        <h1>Books</h1>
        {
            !edits && (
                <div>
                Title: <input type="text" placeholder="title" onChange={(event)=>{setNbook({...nbook,title:event.target.value})}}/><br />
                Author:<input type="text" placeholder="author" onChange={(event)=>{setNbook({...nbook,author:event.target.value})}}/>
                <button onClick={()=>{adds()}}>Enter</button>
              
                </div>
            )
        }
        {
            edits && (
                <div>
                Title: <input type="text" placeholder="title" value={select.title} onChange={(event)=>{setSelect({...select,title:event.target.value})}}/><br />
                Author:<input type="text" placeholder="author" value={select.author} onChange={(event)=>{setSelect({...select,author:event.target.value})}}/>
                <button onClick={()=>{update()}}>update</button>
                
                </div>
            )
        }

        <div className="box">
        {
            book.length>0 && book.map((a)=>{
                return <div className="li">
                <li>
                    <h2>{a.id}.{a.title}</h2>
                    <h3>{a.author}</h3>
                    <button onClick={()=>{del(a.id)}}>del</button>
                    <button onClick={()=>{edit(a)}}>edit</button>
                </li>
                </div>
            })
        }
        </div>
    </div>
)
}
export default Books