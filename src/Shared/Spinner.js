import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-primary "></div>
        </div>
    );
};

export default Spinner;