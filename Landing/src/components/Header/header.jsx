import React, { useState } from 'react';


const links = [
    {
        id: crypto.randomUUID(),
        text: "OUR STORY"
    },
    {
        id: crypto.randomUUID(),
        text: "LOCATIONS"
    },
    {
        id: crypto.randomUUID(),
        text: "MANUFACTURES"
    }
];



export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav className="navbar">
                <img className="menu" src="../public/menu.png" alt="" onClick={toggleMenu} />
                {menuOpen && (
                    <div className="menu-mobile">
                        <ul>
                            {links.map(({ id, text }) => (
                                <li key={id}>{text}</li>
                            ))}
                        </ul>
                    </div>
                )}
            


                <img className="logo" src="../public/logoweb.png" alt="" />
                <img className="profile" src="../public/profile.png" alt="" />
                <div className='header-text'>
           
                <div className="dropdown">
                    <p className="about-us" tabindex="0">ABOUT US ▼</p>
                        <div className="dropdown-content">
                            <ul>
                            {
                    links.map(({ id, text}) => {
                        return (
                            <li key={id}>{text}</li>
                        )
                    })
                }
                            </ul>
                        </div>
                </div>

                <div class="text">
                    <button class="btn-secondary">
                        CREATE ACCOUNT
                 </button>
                 </div>
                </div>
            </nav>
        </header>
        )
      
}
