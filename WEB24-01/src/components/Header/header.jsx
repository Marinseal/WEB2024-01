import React from 'react'

export function Header(){
        return(
        <header>
            <nav class="navbar">
                <img class="menu" src="../public/menu.png" alt="" />
                <img class="logo" src="../public/logoweb.png" alt="" />
                <img class="profile" src="../public/profile.png" alt="" />
                <div className='header-text'>
           
                <div class="dropdown">
                    <p class="about-us" tabindex="0">ABOUT US ▼</p>
                        <div class="dropdown-content">
                            <ul>
                                 <li><a href="#">OUR STORY</a></li>
                                 <li><a href="#">LOCATIONS</a></li>
                                <li><a href="#">MANUFACTURES</a></li>
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
