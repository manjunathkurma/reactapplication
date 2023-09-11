import React from "react";
import { Formik } from 'formik'
function Sformik(){
return  (
    <div className="box">
      <Formik
      initialValue={{firstname:'',age:''}}
      onSubmit={(obj)=>{
        console.log(obj)
      }}
      >
        {
          (ob)=>{
            return (
              <form action="" onSubmit={ob.handleSubmit}>
                Name:<input type="text" placeholder="name" name="firstname" onChange={ob.handleChange} /><br />
                Age:<input type="text" placeholder="age" name="age" onChange={ob.handleChange}/><br />
                <button>click</button>
              </form>
            )
          }
        }
      </Formik>
    </div>
  );

}
export default Sformik