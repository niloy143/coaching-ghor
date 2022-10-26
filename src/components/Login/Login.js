import { Spinner } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Navigate, NavLink, useLocation } from 'react-router-dom';
import { ContextCreator } from '../../ContextProvider/ContextProvider';
import ThirdPartySignIn from '../ThirdPartySignIn/ThirdPartySignIn';

const Login = () => {
    const { state } = useLocation();
    const { dark, login, user, loading, loginError, setLoginError } = useContext(ContextCreator);
    const [showError, setShowError] = useState(false);

    const handleLogin = (e) => {
        setLoginError(null);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password);
        setShowError(true);
    }

    if (loading) {
        return <div className='text-center my-12'>
            <Spinner aria-label='default spinner example' size={'xl'} />
        </div>
    }

    let customErrorMsg = loginError;

    switch (loginError) {
        case 'auth/user-not-found':
            customErrorMsg = 'This email didn\'t register here!'
            break;
        case 'auth/wrong-password':
            customErrorMsg = 'Wrong Password!'
            break;
        case 'auth/too-many-requests':
            customErrorMsg = 'You entered wrong password too many times!'
            break;
            default:
    }

    return (
        user ? <Navigate to={state?.pathname || "/"} /> :
            <div>
                <form className={`${dark ? 'bg-slate-500 text-slate-100' : 'bg-slate-100 text-slate-700'} shadow-md w-11/12 sm:w-2/3 md:w-1/2 xl:w-1/3 mx-auto flex flex-col gap-2 p-5 mt-12 rounded-lg`} onSubmit={handleLogin} onBlur={() => setShowError(false)}>
                    <h2 className='text-2xl font-semibold text-center mb-3'>Log In</h2>
                    {
                        showError && loginError && <p className={`text-center ${dark ? 'text-red-400 font-semibold' : 'text-red-600'}`}>{ customErrorMsg }</p>
                    }
                    <input className='border-gray-300 rounded text-slate-700' type="email" name="email" placeholder="Enter Your Email" required />
                    <input className='border-gray-300 rounded text-slate-700' type="password" name="password" placeholder="Password" required />
                    <NavLink className="underline hover:no-underline" to="/login/forgot-password">Forgot your password?</NavLink>
                    <button className={`${dark ? 'bg-pink-800' : 'bg-pink-600'} w-1/2 mx-auto text-slate-100 py-2 rounded mt-1 font-semibold hover:scale-x-95 transition`} type="submit">Log In</button>
                    <p className='text-center'> Don't have an account? <NavLink className="underline hover:no-underline" to="/register" state={state}>Register Now</NavLink>
                    </p>
                </form>
                <h2 className='text-4xl font-bold text-gray-400 text-center font-mono my-5'>OR</h2>
                <ThirdPartySignIn />
            </div>
    );
};

export default Login;