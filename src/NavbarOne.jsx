import './styles/navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar(){
    let navigate = useNavigate()
    return(
        <div className='Navbar NavbarOne'>
            <div className='logo' onClick={() => {navigate('/')}}>
                <img src= "https://res.cloudinary.com/dyzpvofax/image/upload/v1720900776/samples/Swap-Logo_cnuerm.svg" alt='logo' />
                <p>SWAP</p>
            </div>
    </div>
    )
}
export default Navbar