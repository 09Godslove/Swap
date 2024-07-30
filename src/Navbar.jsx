import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/navbar.css';

export default function Navbar({ searchQuery, handleSearchChange }) {
    let navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0.4) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    let navbarClasses = ['Navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    return (
        <div className={navbarClasses.join(" ")}>
            <div className='logo'>
                <img src='https://res.cloudinary.com/dyzpvofax/image/upload/v1720900776/samples/Swap-Logo_cnuerm.svg' alt='logo' />
                <p>SWAP</p>
            </div>
            <div className='searchBar'>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                />
            </div>
            <button className="listBtn" onClick={() => { navigate('/ListItem') }}>List Item</button>
        </div>
    );
}
