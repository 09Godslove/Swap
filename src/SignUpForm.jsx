import './styles/Sign.css'
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
function Form(){
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate()
    const submitHandler = async () => {
        if (!firstname || !lastname || !email || !mobile || !password) {

          return;
        }
    
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const { data } = await axios.post(
            'https://swapp-backend-6859b4c055db.herokuapp.com/api/user/register',
            { firstname, lastname, email, mobile, password },
            config
          );
          localStorage.setItem("userInfo", JSON.stringify(data));
          navigate('/')
        } catch (error) {
            throw new Error (error)        }
      };
    return(
        <div className="form1 form">
            <label className = 'label'>First Name</label><br/>
            <input className="type1" required = 'true' type="string" onChange={(e) => setFirstName(e.target.value)} /><br/>
            <label className='label'>Last Name</label><br/>
            <input className="type1" required = 'true' type="string" onChange={(e) => setLastName(e.target.value)}/><br/> 
            <label className = 'label'>Email</label><br/>
            <input className="type1" required = 'true' type="string" onChange={(e) => setEmail(e.target.value)}/><br/>
            <label className = 'label'>Phone no</label><br/>
            <input className="type1" required = 'true' type="string" onChange={(e) => setMobile(e.target.value)}/><br/>
            <label className = 'label'>Password</label><br/>
            <input className="type1" required = 'true' type="string" onChange={(e) => setPassword(e.target.value)}/><br/>
            <p className='switch' onClick={() => {navigate('/SignIn')}}>Already have an account?</p>
            <button className="listBtn list" onClick={submitHandler} >Sign Up</button>
        </div>
    )
}
export default Form