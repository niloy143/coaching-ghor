import React, { useContext } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { ContextCreator } from '../../ContextProvider/ContextProvider';

const CheckoutPage = () => {
    const { title, id, price } = useLoaderData();
    const { dark, user } = useContext(ContextCreator);

    return (
        <div className={`${dark ? 'text-slate-100' : 'text-slate-700'}`}>
            <h1 className='text-3xl text-center font-semibold mt-12 mb-5'>Checkout</h1>
            <div className={`border rounded-md shadow-md mx-4 sm:w-3/4 lg:w-1/2 xl:w-1/3 max-w-7xl sm:mx-auto px-5 py-8 ${dark && 'bg-slate-500'}`}>
                <h2 className='text-2xl font-semibold text-center mt-8'>Your Interest</h2>
                <div className='flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-3 items-center sm:w-11/12 mx-auto my-3 font-semibold'>
                    <p className='text-lg'>Course:</p>
                    <NavLink className={`text-xl ${dark ? 'text-green-400' : 'text-blue-600'} underline hover:no-underline`} to={`/course/${id}`}>{title}</NavLink>
                </div>
                <h2 className='text-2xl font-semibold text-center mt-8'>Your Information</h2>
                <div className='mb-8 mt-3'>
                    <div className='flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-3 items-center sm:w-11/12 mx-auto my-3'>
                        <label htmlFor='name' className='text-xl font-semibold'>Your Name:</label>
                        <input className='text-slate-700 rounded' type="text" id="name" defaultValue={user.displayName} placeholder="Enter your name" />
                    </div>
                    <div className='flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-3 items-center sm:w-11/12 mx-auto my-3'>
                        <label htmlFor='email' className='text-xl font-semibold'>Email Address:</label>
                        <input className='text-slate-700 rounded' type="text" id="email" defaultValue={user.email} placeholder="Enter your email" />
                    </div>
                    <div className='flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-3 items-center sm:w-11/12 mx-auto my-3'>
                        <label htmlFor='home-address' className='text-xl font-semibold'>Home Address:</label>
                        <input className='text-slate-700 rounded' type="text" id="home-address" placeholder="Enter your home address" />
                    </div>
                    <div className='flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-3 items-center sm:w-11/12 mx-auto my-3'>
                        <label htmlFor='payment-method' className='text-xl font-semibold'>Select Payment Method:</label>
                        <select className='text-slate-700 rounded'>
                            <option value="bkash">bKash</option>
                            <option value="rocket">Rocket</option>
                            <option value="nagad">Nagad</option>
                            <option value="upay">Upay</option>
                        </select>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-3 items-center sm:w-11/12 mx-auto my-3 text-xl font-semibold'>
                        <p>Payment:</p>
                        <p className={`${dark ? 'text-green-400' : 'text-blue-600'}`}>${price ? price : '0'}</p>
                    </div>
                </div>
                <button className={`px-5 py-2 ${dark ? 'bg-lime-800' : 'bg-lime-600'} text-slate-100 text-base font-semibold rounded block mx-auto hover:scale-95 transition`}>Proceed to Pay</button>
            </div>
        </div>
    );
};

export default CheckoutPage;