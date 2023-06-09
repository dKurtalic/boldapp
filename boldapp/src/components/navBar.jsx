import React from 'react'
import logo from '../res/network.png'
import coverPhoto from '../res/coverPhoto.png';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContex';

const NavBar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
    }

    return (

        <div className='navBar flex flex-wrap justify-between items-center p-[1rem]'>
            <Link to="/"> <div className='flex items-center   px-[2rem]'>
                <div className='flex h-[5rem] w-[5rem] ' style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundColor: 'bg-lightBackground' }} />
                <h1 className='logo text-[25px] text-textColor pl-3'>
                    <strong>Start</strong>App
                </h1>

            </div>
            </Link>
            <div className="menu flex flex-wrap lg:px-[2.5rem] sm:px-[0.9rem] gap-8 sm:gap-4 text-[1.2rem]">
                <li className="menuList mt-1.5 hover:text-vibrantCoral mx-2"><Link to="/explore">Explore</Link></li>

                {user && (

                    <div className='flex flex-wrap   items-center gap-8'>
                        <div>
                            <div>
                                <Link to="/registerStartup"><li className="menuList hover:text-vibrantCoral">Register a startup</li></Link>
                            </div>
                        </div>

                        <div>
                            <div className='menuList hover:text-vibrantCoral'>
                                <button onClick={handleClick}>Log out</button>
                            </div>
                            <div className=' text-xs'>{user.email}</div>
                        </div>

                    </div>
                )}

                {!user && (
                    <div className="menu flex px-[2.5rem] gap-8 text-[1.2rem]">
                        <Link to="/register"><li className="menuList hover:text-vibrantCoral">Register</li></Link>
                        <Link to="/signin"><li className="menuList hover:text-vibrantCoral">Sign in</li></Link>
                    </div>
                )}

            </div>
        </div>

    )
}

export default NavBar