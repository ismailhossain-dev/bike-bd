import BikeCardSkeleton from '@/components/skelatons/BikeCardSkelaton/BikeCardSkelaton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto my-10'>
           {[...Array(10)].map((_, index)=> (
            <BikeCardSkeleton key={index}></BikeCardSkeleton>
           ))}
        </div>
    );
};

export default loading;