import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/coaching-ghor.logo.png'

const NavigationBar = () => {
    return (
        <div className='shadow-lg sticky top-0'>
            <Navbar fluid={true} >
                <Navbar.Brand>
                    <NavLink to="/" className='flex items-center gap-1 text-2xl font-semibold'>
                        <img className='w-16' src={logo} alt="coaching ghor logo" />
                        <span>Coaching Ghor</span>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <div className='flex items-center gap-5'>
                        <div className='flex gap-3'>
                            <NavLink className={({isActive}) => `py-1 px-3 rounded hover:bg-slate-200 ${isActive && 'bg-slate-200'}`} to="/courses">Courses</NavLink>
                            <NavLink className={({isActive}) => `py-1 px-3 rounded hover:bg-slate-200 ${isActive && 'bg-slate-200'}`} to="/faq">FAQ</NavLink>
                            <NavLink className={({isActive}) => `py-1 px-3 rounded hover:bg-slate-200 ${isActive && 'bg-slate-200'}`} to="/blog">Blog</NavLink>
                        </div>
                        <div className='bg-slate-400 p-1 rounded-full'>
                            <button className='py-1 px-3 bg-slate-100 rounded-full'>Light</button>
                            <button className='py-1 px-3 text-slate-100 rounded-full'>Dark</button>
                        </div>
                        <div>
                            <button className='px-4 py-2 bg-pink-800 text-slate-100 rounded'>Login</button>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;