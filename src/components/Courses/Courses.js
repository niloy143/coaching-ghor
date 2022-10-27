import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ContextCreator } from '../../ContextProvider/ContextProvider';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    const { dark } = useContext(ContextCreator);

    return (
        <div className={`${dark ? 'bg-slate-700' : 'bg-slate-200'} grow rounded-lg p-4`}>
            <h1 className={`text-3xl md:text-4xl font-semibold text-center pt-8 pb-10`}>Courses We Provide</h1>
            <div className='grid lg:grid-cols-2 gap-4'>
                {
                    courses.map(course => <Course key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Courses;