import { Dropdown } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FcSettings } from 'react-icons/fc';
import { useLoaderData } from 'react-router-dom';
import { ContextCreator } from '../../ContextProvider/ContextProvider';
import AsideMenu from './AsideMenu';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
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
                <div className={`${dark ? 'bg-slate-700' : 'bg-slate-200'} grow rounded-lg p-4`}>
                    <h1 className={`text-3xl md:text-4xl font-semibold text-center py-5`}>Courses We Provide</h1>
                    <div className='grid lg:grid-cols-2 gap-4'>
                        {
                            courses.map(course => <Course course={course} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;