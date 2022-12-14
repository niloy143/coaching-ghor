import { Avatar, Dropdown, Navbar, Spinner, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/coaching-ghor.logo.png'
import { ContextCreator } from '../../ContextProvider/ContextProvider';
import './NavigationBar.css';
import { BsLightbulbFill, BsLightbulbOffFill } from 'react-icons/bs';

const NavigationBar = () => {
    const { dark, setDark, user, logOut, loading } = useContext(ContextCreator);
    const navigate = useNavigate();
    const location = useLocation();

    const handleMode = (isDark) => {
        setDark(isDark);
        localStorage.setItem('darkMode', isDark);
    }

    return (
        <Navbar fluid={true} className={`${dark ? 'bg-nav-dark text-slate-100' : 'bg-nav-light text-slate-700'} shadow-lg sticky top-0 z-50 mb-2`}>
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
                    <div>
                        {
                            user ? <Dropdown size={'xs'} inline={true} arrowIcon={false} label={<Tooltip placement='right' style={`${dark ? 'dark' : 'light'}`} content={user.displayName}>
                                <Avatar img={user.photoURL} rounded={true} />
                            </Tooltip>}>
                                <div className='flex justify-center items-center flex-col px-5 py-5'>
                                    <h2 className='text-lg'>{user.displayName ? user.displayName : 'Unknown'}</h2>
                                    <p>{user.email ? user.email : 'No Email'}</p>
                                </div>
                                <Dropdown.Item onClick={() => navigate('/update-profile')}> Update Profile </Dropdown.Item>
                                <Dropdown.Item onClick={logOut}> Log Out </Dropdown.Item>
                            </Dropdown> : loading ? <Tooltip content={'Loading Login Status'}>
                                <Spinner aria-label="Default status example" />
                            </Tooltip> : <NavLink to="/login" state={location} className={`px-4 py-2 ${dark ? 'bg-pink-800' : 'bg-pink-600'} text-slate-100 text-base font-semibold rounded`}>Login</NavLink>
                        }

                    </div>
                    <div className={`${dark ? 'bg-slate-700' : 'bg-slate-400'} p-1 rounded-full flex items-center gap-2`}>
                        <button onClick={() => handleMode(false)} className={`p-1 text-xl ${!dark ? 'bg-slate-100' : 'text-slate-100'} rounded-full`}><Tooltip content={'Light'}><BsLightbulbFill /></Tooltip></button>
                        <button onClick={() => handleMode(true)} className={`p-1 text-xl ${dark ? 'bg-slate-100 text-slate-700' : 'text-slate-100'} rounded-full`}><Tooltip content={'Dark'}><BsLightbulbOffFill /></Tooltip></button>
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;