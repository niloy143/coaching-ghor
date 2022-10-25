import React, { useContext } from 'react';
import { ContextCreator } from '../../ContextProvider/ContextProvider';
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const GoogleFacebookSignIn = () => {
    const { dark } = useContext(ContextCreator);
    return (
        <div className={`${dark ? 'bg-slate-500' : 'bg-slate-100'} shadow-md w-11/12 sm:w-2/3 md:w-1/2 xl:w-1/3 mx-auto flex flex-col gap-2 py-8 mb-12 rounded-lg`}>
            <div className='flex items-center gap-3 w-1/2 mx-auto border shadow-md px-5 py-2 rounded-md cursor-pointer hover:shadow-none hover:translate-y-0.5 bg-slate-100'>
                <FcGoogle className='text-3xl' />
                <p className='text-lg font-semibold grow text-center'>Sign-In With Google</p>
            </div>
            <div className='flex items-center gap-3 w-1/2 mx-auto border shadow-md px-5 py-2 rounded-md cursor-pointer hover:shadow-none hover:translate-y-0.5 bg-slate-100'>
                <FaFacebook className='text-blue-700 text-3xl' />
                <p className='text-lg font-semibold grow text-center'>Sign-In With Facebook</p>
            </div>
        </div>
    );
};

export default GoogleFacebookSignIn;