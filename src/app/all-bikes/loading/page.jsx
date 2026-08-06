import BikeCardSkeleton from '@/components/skelatons/BikeCardSkelaton/BikeCardSkelaton'
import React from 'react'

function Loading() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
        {[...Array(12)].map((_, index) => {
            <BikeCardSkeleton key={index}></BikeCardSkeleton>
        })}
    </div>
  )
}

export default Loading