import React from 'react';

const EmptyPages = ({text}) => {
    return (
        <p className='text-center font-semibold text-xl sm:text-2xl text-slate-400 my-12 w-full'>
            {text}
        </p>
    );
};

export default EmptyPages;