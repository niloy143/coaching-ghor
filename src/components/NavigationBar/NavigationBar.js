import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/coaching-ghor.logo.png'
import { ContextCreator } from '../../ContextProvider/ContextProvider';
import './NavigationBar.css';

const NavigationBar = () => {
    const { dark, setDark } = useContext(ContextCreator);
    const navigate = useNavigate();
    const location = useLocation();

    const handleMode = (isDark) => {
        setDark(isDark)
    }

    return (
        <Navbar fluid={true} className={`${dark ? 'bg-nav-dark text-slate-100' : 'bg-nav-light text-slate-700'} shadow-lg sticky top-0 mb-2`}>
            <Navbar.Brand>
                <div className='flex items-center gap-1 text-2xl font-semibold cursor-pointer' onClick={() => navigate("/")}>
                    <img className='w-12 sm:w-16' src={logo} alt="coaching ghor logo" />
                    <span>Coaching Ghor</span>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle className={`${dark ? 'toggle-button-dark' : 'text-slate-700'}`} />
            <Navbar.Collapse>
                <div className='flex flex-col md:flex-row items-center gap-5 pb-5 md:pb-0'>
                    <div className='flex gap-3 text-base sm:text-lg'>
                        <NavLink className={({ isActive }) => `py-1 px-3 rounded hover:bg-slate-200 hover:text-slate-700 ${isActive && 'bg-slate-200 text-slate-700'}`} to="/courses">Courses</NavLink>
                        <NavLink className={({ isActive }) => `py-1 px-3 rounded hover:bg-slate-200 hover:text-slate-700 ${isActive && 'bg-slate-200 text-slate-700'}`} to="/faq">FAQ</NavLink>
                        <NavLink className={({ isActive }) => `py-1 px-3 rounded hover:bg-slate-200 hover:text-slate-700 ${isActive && 'bg-slate-200 text-slate-700'}`} to="/blog">Blog</NavLink>
                    </div>
                    <div className={`${dark ? 'bg-slate-700' : 'bg-slate-400'} p-1 rounded-full`}>
                        <button onClick={() => handleMode(false)} className={`py-1 px-3 ${!dark ? 'bg-slate-100' : 'text-slate-100'} rounded-full`}>Light</button>
                        <button onClick={() => handleMode(true)} className={`py-1 px-3 ${dark ? 'bg-slate-100 text-slate-700' : 'text-slate-100'} rounded-full`}>Dark</button>
                    </div>
                    <div>
                        <NavLink to="/login" state={location} className={`px-4 py-2 ${dark ? 'bg-pink-800' : 'bg-pink-600'} text-slate-100 text-base font-semibold rounded`}>Login</NavLink>
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;