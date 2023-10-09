import React from "react";
import { useState } from "react";
import Card from "./card";
import Form from "./form";
function Nav() {
    const [isShowForm, setIsShowForm] = useState(false);
  
    return (
      <div>
        <div className="navbar">
            <div className="link">
            <button onClick={()=>setIsShowForm(false)}>HOME</button>
            <button onClick={()=>setIsShowForm(true)}>ADD FORM</button>
            </div>
            <div>
              <h1>Tweety</h1>
            </div>
        </div>
      {isShowForm ? ( 
       
       <>
       <Form/>
       </>
      
      ) :(
        
          <Card/>
      
      )}
      </div>
    );
  }
  export default Nav;