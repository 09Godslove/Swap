import './styles/Sign.css'
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
function Form(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const submitHandler = async () => {
        setLoading(true);
        if (!email || !password) {
          setLoading(false);
          return;
        }
    
        // console.log(email, password);
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
    
          const { data } = await axios.post(
            'https://swapp-backend-6859b4c055db.herokuapp.com/api/user/admin-login',
            { email, password },
            config
          );
          setLoading(false);
          navigate("/");
        } catch (error) {
            throw new Error (error),
          setLoading(false);
        }
      };
    let navigate = useNavigate()
    return(
        <div className="form1 form">
            <label className = 'label'>Email</label><br/>
            <input className="type1" required = 'true' type="string"  onChange={(e) => setEmail(e.target.value)} /><br/>
            <label className='label'>Password</label><br/>
            <input className="type1" required = 'true' type="string"  onChange={(e) => setPassword(e.target.value)}/><br/> 
            <button className="listBtn list"  onClick={submitHandler} disabled ={loading}>Log in</button>
            <p className='switch' onClick={() => {navigate('/SignUp')}}> Dont have an account? sign up</p>
        </div>
    )
}
export default Form