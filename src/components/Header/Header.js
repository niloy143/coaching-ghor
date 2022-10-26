import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { ContextCreator } from '../../ContextProvider/ContextProvider';
import backgroundImg from '../../assets/background.png';

const Header = () => {
    const { dark } = useContext(ContextCreator);
    return (
        <div className={`${dark ? 'text-slate-100' : 'text-slate-700'} flex flex-col-reverse lg:flex-row justify-center items-center py-12 max-w-7xl mx-auto`}>
            <div className='px-5 lg:pl-12'>
                <h2 className='text-3xl font-semibold'>Learning From <span className={`${dark ? 'text-pink-800' : 'text-pink-500'} font-bold font-serif`}>Coaching Ghor</span></h2>
                <p className='my-5'>We have collected effective and efficient courses for you so that you can build your skill set on your dream field. Here you will find courses which are provided by the specialists who are really skilled and experienced on the certain field. You don't have to worry about the guidelines to make your way to the high. Enroll the course you are interested in and stick to us. The rest is ours.z</p>
                <NavLink className={`inline-flex items-center gap-2 ${dark ? 'bg-blue-700' : 'bg-blue-400'} text-slate-100 px-5 py-3 rounded font-semibold text-base sm:text-lg hover:scale-95 transition`}>
                    <span>REGISTER NOW</span>
                    <FaArrowRight />
                </NavLink>
            </div>
            <img src={backgroundImg} alt="" />
        </div>
    );
};

export default Header;