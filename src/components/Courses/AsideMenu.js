import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextCreator } from '../../ContextProvider/ContextProvider';

const AsideMenu = () => {
    const { dark } = useContext(ContextCreator);
    const navigate = useNavigate();
    return (
        <div className={`w-64 py-5`}>
            <h2 className='text-2xl font-semibold text-center mb-2'>Settings</h2>
            <ul>
                <li className={`px-5 py-2 ${dark ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} cursor-pointer`} onClick={()=> navigate('/courses')}>All Courses</li>
                <li className={`px-5 py-2 ${dark ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} cursor-pointer`} onClick={()=> navigate('/courses/finished')}>Finished Courses</li>
                <li className={`px-5 py-2 ${dark ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} cursor-pointer`} onClick={()=> navigate('/courses/ongoing')}>Ongoing Courses</li>
                <li className={`px-5 py-2 ${dark ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} cursor-pointer`} onClick={()=> navigate('/courses/free')}>Free Courses</li>
                <li className={`px-5 py-2 ${dark ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} cursor-pointer`} onClick={()=> navigate('/courses/paid')}>Paid Courses</li>
                <li className={`px-5 py-2 ${dark ? 'hover:bg-slate-600' : 'hover:bg-slate-200'} cursor-pointer`} onClick={()=> navigate('/courses/offline')}>Offline Courses</li>
            </ul>
        </div>
    );
};

export default AsideMenu;