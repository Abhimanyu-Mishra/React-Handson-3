import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Second () {

    
    const navigate1 = useNavigate();
    const location = useLocation();
    
const back=(e)=>{
    e.preventDefault();
   
navigate1('/')
  }
  return (
   
    <div><div>
    {location.count.employee.map((val,index)=>{ return(
   
  <p key={index}>{val.Name} {val.Dep}{val.Rating}</p>
  )
         
    })}
    </div>

    <button onClick={back}>Go-Back</button>


    </div>
  )
}

export default Second
