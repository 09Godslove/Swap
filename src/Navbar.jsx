import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/navbar.css'

export default function Navbar(){
    let navigate = useNavigate()
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 0.5 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
    let navbarClasses=['Navbar'];
        if(scrolled){
            navbarClasses.push('scrolled');
    }
    return(
        <div className={navbarClasses.join(" ")}>
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