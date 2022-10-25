import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ContextCreator } from '../../ContextProvider/ContextProvider';

const Register = () => {
    const { state } = useLocation();
    const { dark } = useContext(ContextCreator);
    return (
        <div>
            <form className={`${dark ? 'bg-slate-500 text-slate-100' : 'bg-slate-100 text-slate-700'} shadow-md w-11/12 sm:w-2/3 md:w-1/2 xl:w-1/3 mx-auto flex flex-col gap-2 p-5 my-12 rounded-lg`}>
                <h2 className='text-2xl font-semibold text-center mb-3'>Register</h2>
                <input className='border-gray-300 rounded text-slate-700' type="text" name="name" placeholder="Enter Your Name" required />
                <input className='border-gray-300 rounded text-slate-700' type="text" name="photo" placeholder="Enter Photo URL" required />
                <input className='border-gray-300 rounded text-slate-700' type="email" name="email" placeholder="Enter Your Email" required />
                <input className='border-gray-300 rounded text-slate-700' type="password" name="password" placeholder="Password" required />
                <button className={`${dark ? 'bg-pink-800' : 'bg-pink-600'} w-1/2 mx-auto text-slate-100 py-2 rounded mt-1 font-semibold hover:scale-x-95 transition`} type="submit">Register</button>
                <p className='text-center'> Already have an account? <NavLink className="underline hover:no-underline" to="/login" state={state}>Log In</NavLink>
                </p>
            </form>
        </div>
    );
};

export default Register;