import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import errorImg from '../../assets/error-page.png';

const ErrorPage = () => {
    return (
        <div>
                <NavigationBar />
            <div className='flex flex-col w-64 sm:w-96 mx-auto my-12'>
                <img className='w-full' src={errorImg} alt="" />
                <p className="text-2xl sm:text-3xl font-semibold text-center text-slate-500">Oops! Page Not Found</p>
            </div>
        </div>
    );
};

export default ErrorPage;