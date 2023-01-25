import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css'

const Form = () => {

    const navigate = useNavigate();
    const [count,setcount]=useState({
      Name: '',
      Dep: '',
      Rating: '',
      employee:[]
  });
    const change= (e) =>{
  console.log(e.target.value)
  setcount({...count,[e.target.name] : e.target.value})
  console.log(count)
   }
  
    const click = (e) => {
      e.preventDefault();
  
      const obj= {
        Name : count.Name,
        Dep: count.Dep,
        Rating:count.Rating
      }
      
  var arr=count.employee
  arr.push(obj)
  setcount({employee: arr})
  console.log(count);
  navigate('/second', {count})
  

  }

  return (
    <div>
    <center>
    <h1>Employee Feedback Form</h1>
    <form>
    <label  >Name</label>
    <input type={"text"} name= 'Name' onChange= {change} placeholder='Full...Name'></input>
   <br/>
    <label  >Department</label>
    <input type={"text"} name= 'Dep' onChange={change}  placeholder='Department...'></input>
    <br/>
    <label  >Rating</label>
    <input type={'number'} name='Rating' onChange={change} placeholder='Rating...'></input>
    <br/>
  <button onClick={click}>Submit !!</button>
    </form>

    </center>
    </div>
  )
}

export default Form
