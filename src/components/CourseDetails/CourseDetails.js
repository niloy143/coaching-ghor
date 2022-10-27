import React, { useContext } from 'react';
import { BsBookmarkCheckFill, BsCameraVideoFill, BsFillQuestionCircleFill, BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosContacts, IoIosTime } from 'react-icons/io';
import { CgNotes } from 'react-icons/cg';
import { NavLink, useLoaderData } from 'react-router-dom';
import { ContextCreator } from '../../ContextProvider/ContextProvider';

const CourseDetails = () => {
    const { dark } = useContext(ContextCreator);
    const course = useLoaderData();
    let keys = 1;

    return (
        <div className={`${dark ? 'text-slate-100' : 'text-slate-700'} max-w-7xl mx-auto my-5 sm:my-12 px-5`}>
            <div>
                <img className='w-full sm:w-5/6 mx-auto rounded-xl' src={course.image.thumbnail} alt="" />
                <h2 className='text-3xl sm:text-5xl font-bold text-center my-5 sm:my-8'>{course.title}</h2>
                <p className='lg:w-1/2 text-justify sm:text-center mx-auto mb-5'>{course.shortDescription}</p>
            </div>
            <hr className='my-12' />
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
                <div>
                    <h2 className='text-2xl sm:text-3xl font-semibold'>What you will learn from this course:</h2>
                    <ul className='mt-5 mb-10 md:my-5'>
                        {
                            course.learningList.map(lesson => <li className='my-3 sm:text-xl font-semibold' key={keys++}>
                                <BsBookmarkCheckFill className='inline' /> {lesson}
                            </li>)
                        }
                    </ul>
                </div>
                <div className='w-72 border shadow-lg rounded-lg overflow-hidden pb-5'>
                    <img className='w-full' src={course.image.thumbnail} alt="" />
                    <NavLink to={`/checkout/${course.id}`} className={`${dark ? 'bg-lime-900' : 'bg-lime-500'} text-slate-100 px-5 py-3 rounded text-lg font-semibold hover:scale-95 block m-3 text-center`}>
                        Get Premium Access <BsFillShieldLockFill className='inline' />
                    </NavLink>
                    <div className='px-5 flex flex-col items-center'>
                        <div className='flex items-center gap-3 my-3'>
                            <IoIosContacts className='text-3xl' />
                            <p>{course.students} Students Enrolled</p>
                        </div>
                        <div className='grid grid-cols-2 gap-3 mb-3'>
                            <p className='flex items-center gap-1'>
                                <BsCameraVideoFill className='inline text-xl' />
                                <span>
                                    {course.video} Videos
                                </span>
                            </p>
                            <p className='flex items-center gap-1'>
                                <IoIosTime className='inline text-xl' />
                                <span>
                                    {course.time} Hours
                                </span>
                            </p>
                            <p className='flex items-center gap-1'>
                                <CgNotes className='inline text-xl' />
                                <span>
                                    {course.notes} Notes
                                </span>
                            </p>
                            <p className='flex items-center gap-1'>
                                <BsFillQuestionCircleFill className='inline text-xl' />
                                <span>
                                    {course.quiz} Quiz
                                </span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-12' />
            <div>
                <h2 className='text-3xl text-center font-semibold my-5'>You get {course.mentors.length === 1 ? `a mentor` : `${course.mentors.length} mentors`}</h2>
                <div className='my-8 flex gap-12 flex-wrap justify-center'>
                    {
                        course.mentors.map(mentor => <div className='w-72 rounded-md overflow-hidden border shadow-lg' key={keys++}>
                            <img className='w-full' src={mentor.img} alt={mentor.name} />
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