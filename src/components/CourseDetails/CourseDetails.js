import React, { useContext } from 'react';
import { BsBookmarkCheckFill, BsFillShieldLockFill } from 'react-icons/bs';
import { NavLink, useLoaderData } from 'react-router-dom';
import { ContextCreator } from '../../ContextProvider/ContextProvider';

const CourseDetails = () => {
    const { dark } = useContext(ContextCreator);
    const [course] = useLoaderData();
    let keys = 1;

    return (
        <div className={`${dark ? 'text-slate-100' : 'text-slate-700'} max-w-7xl mx-auto my-5 sm:my-12 px-5`}>
            <div>
                <img className='w-full sm:w-5/6 mx-auto rounded-xl' src="https://img.freepik.com/free-vector/social-media-background_127544-1091.jpg?w=1380&t=st=1666808168~exp=1666808768~hmac=5684fe21e92dbac51d2ce7078a84c86765586a1be5f39212254b6eacdedeab47" alt="" />
                <h2 className='text-3xl sm:text-5xl font-bold text-center my-5 sm:my-8'>{course.title}</h2>
                <p className='lg:w-1/2 text-justify sm:text-center mx-auto mb-5'>{course.shortDescription}</p>
            </div>
            <hr className='my-12' />
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
                <div>
                    <h2 className='text-2xl sm:text-3xl font-semibold'>What will you learn from this course:</h2>
                    <ul className='mt-5 mb-10 md:my-5'>
                        {
                            course.learningList.map(lesson => <li className='my-3 sm:text-xl font-semibold' key={keys++}>
                                <BsBookmarkCheckFill className='inline' /> {lesson}
                            </li>)
                        }
                    </ul>
                </div>
                <div className='w-72 border shadow-lg rounded-lg overflow-hidden pb-5'>
                    <img className='w-full' src="https://img.freepik.com/free-vector/social-media-background_127544-1091.jpg?w=1380&t=st=1666808168~exp=1666808768~hmac=5684fe21e92dbac51d2ce7078a84c86765586a1be5f39212254b6eacdedeab47" alt="" />
                    <h3 className='px-3 text-center my-3 font-semibold text-2xl'>{course.title}</h3>
                    <p className='px-3 my-3 text-center'>{course.tagline}</p>
                    <div className='flex justify-center'>
                        <NavLink to="" className={`${dark ? 'bg-lime-900' : 'bg-lime-500'} text-slate-100 px-5 py-3 rounded text-lg font-semibold hover:scale-95 inline-block`}>
                            Get Premium Access <BsFillShieldLockFill className='inline' />
                        </NavLink>
                    </div>
                </div>
            </div>
            <hr className='my-12' />
            <div>
                <h2 className='text-3xl text-center font-semibold my-5'>You get {course.mentors.length === 1 ? `a mentor` : `${course.mentors.length} mentors`}</h2>
                <div className='my-8 flex gap-12 flex-wrap justify-center'>
                    {
                        course.mentors.map(mentor => <div className='w-72 rounded-md overflow-hidden border shadow-lg' key={keys++}>
                            <img className='w-full' src="https://randomuser.me/api/portraits/men/27.jpg" alt={mentor.name} />
                            <div className='px-5 pb-5'>
                                <h3 className='text-xl font-semibold text-center my-3'>{mentor.name}</h3>
                                <p className='text-sm'>{mentor.qualification}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;