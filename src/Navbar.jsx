import React from 'react'
import './styles/navbar.css'

export default function Navbar(){
    return(
        <div className='Navbar'>
            <div className='logo'>
                <img src='./src/assets/Swap-Logo.svg' alt='logo' />
                <p>SWAP</p>
            </div>
            <div className='searchBar'>
                <input type='text'  />
            </div>
        </div>
    )
}