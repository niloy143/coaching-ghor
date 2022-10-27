import React, { useContext } from 'react';
import { ContextCreator } from '../../ContextProvider/ContextProvider';

const AsideMenu = () => {
    const { dark } = useContext(ContextCreator);
    return (
        <div className={`w-64 py-5`}>
            <h2 className='text-2xl font-semibold text-center mb-2'>Settings</h2>
            <ul>
                <li className={`px-5 py-2 ${dark ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} cursor-pointer`}>Checkout</li>
                <li className={`px-5 py-2 ${dark ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} cursor-pointer`}>Finished Courses</li>
                <li className={`px-5 py-2 ${dark ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} cursor-pointer`}>Checkout</li>
                <li className={`px-5 py-2 ${dark ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} cursor-pointer`}>Checkout</li>
                <li className={`px-5 py-2 ${dark ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} cursor-pointer`}>Progress</li>
                <li className={`px-5 py-2 ${dark ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} cursor-pointer`}>Leaderboard Rank</li>
            </ul>
        </div>
    );
};

export default AsideMenu;