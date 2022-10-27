import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ContextCreator } from '../../ContextProvider/ContextProvider';

const CheckoutPage = () => {
    const { title, quiz, notes, video, time } = useLoaderData();
    const { dark } = useContext(ContextCreator);

    return (
        <div className={`${dark ? 'text-slate-100' : 'text-slate-700'}`}>
            <h1 className='text-3xl text-center font-semibold mt-12 mb-5'>Checkout</h1>
            <div className={`border rounded-md shadow-md mx-4 sm:w-3/4 lg:w-1/2 xl:w-1/3 max-w-7xl sm:mx-auto px-5 py-8 ${dark && 'bg-slate-500'}`}>
                <h2 className='text-2xl text-center font-semibold'>{title}</h2>
                <div className='my-5'>
                    <div className='flex justify-between w-11/12 mx-auto text-lg font-semibold'>
                        <p>Vidoes:</p>
                        <p>{video}</p>
                    </div>
                    <div className='flex justify-between w-11/12 mx-auto text-lg font-semibold'>
                        <p>Notes:</p>
                        <p>{notes}</p>
                    </div>
                    <div className='flex justify-between w-11/12 mx-auto text-lg font-semibold'>
                        <p>Quiz:</p>
                        <p>{quiz}</p>
                    </div>
                    <div className='flex justify-between w-11/12 mx-auto text-lg font-semibold'>
                        <p>Time (hours):</p>
                        <p>{time}</p>
                    </div>
                </div>
                <button className={`px-5 py-2 ${dark ? 'bg-lime-800' : 'bg-lime-600'} text-slate-100 text-base font-semibold rounded block mx-auto hover:scale-95 transition`}>Proceed</button>
            </div>
        </div>
    );
};

export default CheckoutPage;