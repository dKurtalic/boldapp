import React from 'react'
import logo from '../res/network.png'
import coverPhoto from '../res/coverPhoto.png';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (

        <div className='navBar flex justify-between items-center p-[1rem]'>
            <Link to="/"> <div className='flex items-center   px-[2rem]'>
                <div className='flex h-[5rem] w-[5rem] ' style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundColor: 'bg-lightBackground' }} />
                <h1 className='logo text-[25px] text-textColor pl-3'>
                    <strong>Start</strong>App
                </h1>

            </div>
            </Link>
            <div className="menu flex px-[2.5rem] gap-8 text-[1.2rem]">
                <li className="menuList hover:text-vibrantCoral "><Link to="/explore">Explore</Link></li>
                <Link to="/register"><li className="menuList hover:text-vibrantCoral">Register</li></Link>
                <Link to="/signin"><li className="menuList hover:text-vibrantCoral">Sign in</li></Link>
            </div>
        </div>

    )
}

export default NavBar