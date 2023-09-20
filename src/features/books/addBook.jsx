import React, { useState } from "react";
import { useAddBookMutation, useLazyGetAllBooksQuery } from "../../service/booksApi";
function AddBook(){
    var [book,setBook]=useState({title:'',author:''})
    var [books]=useAddBookMutation()
    var [refeatch]=useLazyGetAllBooksQuery()
    function adds(){
        books(book).then(()=>{
            refeatch()
        })
        
    }
    return (
        <div >
            <h1>Books</h1>
            <div >
                <input type="text" onChange={(event)=>{setBook({...book,title:event.target.value})}} /><br/>
                <input type="text" onChange={(event)=>{setBook({...book,author:event.target.value})}}/><br/>
                <button onClick={()=>{adds()}}>Add</button>
            </div>
        </div>
    )
}
export default AddBook