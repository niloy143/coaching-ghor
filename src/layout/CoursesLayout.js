import { Dropdown } from 'flowbite-react';
import React, { useContext } from 'react';
import { FcSettings } from 'react-icons/fc';
import { Outlet } from 'react-router-dom';
import AsideMenu from '../components/Courses/AsideMenu';
import { ContextCreator } from '../ContextProvider/ContextProvider';

const CoursesLayout = () => {
    const { dark } = useContext(ContextCreator);
    return (
        <div className={`${dark ? 'text-slate-100' : 'text-slate-700'} max-w-7xl mx-auto`}>
            <div className='flex md:hidden justify-end px-4 py-5'>
                <Dropdown label={
                    <FcSettings className='text-2xl active:rotate-45 transition' />
                } arrowIcon={false} inline={true} >
                    <AsideMenu />
                </Dropdown>
            </div>
            <div className={`flex gap-4 items-start px-4 md:my-12`}>
                <div className={`${dark ? 'bg-slate-500' : 'bg-slate-100 shadow-md'} rounded-md hidden md:block`}>
                    <AsideMenu />
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default CoursesLayout;