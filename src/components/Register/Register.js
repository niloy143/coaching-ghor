import { Spinner } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Navigate, NavLink, useLocation } from 'react-router-dom';
import { ContextCreator } from '../../ContextProvider/ContextProvider';
import ThirdPartySignIn from '../ThirdPartySignIn/ThirdPartySignIn';

const Register = () => {
    const { state } = useLocation();
    const { dark, createUser, user, loading, regError, setRegError } = useContext(ContextCreator);
    const [showError, setShowError] = useState(false);

    const handleRegistration = (e) => {
        setRegError(null);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password === confirmPassword) {
            createUser(email, password, name, photoURL);
        }
        else {
            setRegError('Passwords didn\'t match');
        }
        setShowError(true);
    }

    let customErrorMsg = regError;

    switch (regError) {
        case 'auth/email-already-in-use':
            customErrorMsg = 'This email already have an account!'
            break;
        case 'auth/invalid-email':
            customErrorMsg = 'Invalid Email Address!'
            break;
        case 'auth/weak-password':
            customErrorMsg = 'Password must be 6-20 characters.'
            break;
        case 'auth/invalid-password':
            customErrorMsg = 'Invalid Password! Try different one.'
            break;
        default:
    }

    if (loading) {
        return <div className='text-center my-12'>
            <Spinner aria-label='default spinner example' size={'xl'} />
        </div>
    }

    return (
        user ? <Navigate to={state?.pathname || "/"} /> :
            <div>
                <form className={`${dark ? 'bg-slate-500 text-slate-100' : 'bg-slate-100 text-slate-700'} shadow-md w-11/12 sm:w-2/3 md:w-1/2 xl:w-1/3 mx-auto flex flex-col gap-2 p-5 mt-12 rounded-lg`} onSubmit={handleRegistration} onBlur={() => setShowError(false)}>
                    <h2 className='text-2xl font-semibold text-center mb-3'>Register</h2>
                    {
                        showError && regError && <p className={`text-center ${dark ? 'text-red-400 font-semibold' : 'text-red-600'}`}>{customErrorMsg}</p>
                    }
                    <input className='border-gray-300 rounded text-slate-700' type="text" name="name" placeholder="Enter Your Name" required />
                    <input className='border-gray-300 rounded text-slate-700' type="text" name="photo" placeholder="Enter Photo URL" required />
                    <input className='border-gray-300 rounded text-slate-700' type="email" name="email" placeholder="Enter Your Email" required />
                    <input className='border-gray-300 rounded text-slate-700' type="password" name="password" placeholder="Password" required />
                    <input className='border-gray-300 rounded text-slate-700' type="password" name="confirmPassword" placeholder="Confirm Password" required />
                    <button className={`${dark ? 'bg-pink-800' : 'bg-pink-600'} w-1/2 mx-auto text-slate-100 py-2 rounded mt-1 font-semibold hover:scale-x-95 transition`} type="submit">Register</button>
                    <p className='text-center'> Already have an account? <NavLink className="underline hover:no-underline" to="/login" state={state}>Log In</NavLink>
                    </p>
                </form>
                <h2 className='text-4xl font-bold text-gray-400 text-center font-mono my-5'>OR</h2>
                <ThirdPartySignIn />
            </div>
    );
};

export default Register;