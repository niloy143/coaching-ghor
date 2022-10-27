import React, { useContext } from 'react';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { ContextCreator } from '../../ContextProvider/ContextProvider';

const Course = ({ course }) => {
    const { dark } = useContext(ContextCreator);
    const { title, image, id } = course;
    return (
        <div className='pb-5 border rounded-md overflow-hidden shadow-md'>
            <img src={image.thumbnail} alt={title} />
            <h2 className='text-2xl lg:text-3xl font-semibold text-center my-5'>{title}</h2>
            <div className='flex items-center justify-between px-3'>
                <NavLink to="/checkout" className={`inline-flex items-center gap-2 ${dark ? 'bg-blue-700' : 'bg-blue-400'} text-slate-100 px-5 py-3 rounded font-semibold text-base sm:text-lg hover:scale-95 transition`}>
                    <span>Enroll Now</span>
                    <BsFillShieldLockFill />
                </NavLink>
                <NavLink to={`/course/${id}`} className={`${!dark && 'text-blue-700'} font-semibold text-base sm:text-lg hover:no-underline underline`}>
                    SEE DETAILS
                </NavLink>
            </div>
        </div>
    );
};

export default Course;