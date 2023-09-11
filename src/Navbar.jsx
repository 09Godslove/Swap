import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/navbar.css'

export default function Navbar(){
    let navigate = useNavigate()
    return(
        <div className='Navbar'>
            <div className='logo'>
                <img src='./src/assets/Swap-Logo.svg' alt='logo' />
                <p>SWAP</p>
            </div>
            <div className='searchBar'>
                <input type='text'  />
            </div>
            <button className="listBtn" onClick={() => {navigate('/ListItem')}} >List Item</button>
        </div>
    )
}