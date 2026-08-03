import OurBikeCard from '@/components/Cards/OurBikeCard';
import Footer from '@/components/Footer/Footer';
import useAxiosSecure from '@/components/hooks/useAxiosSecure';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const AccessoriesPage = async() => {
    
    const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/our-all-products`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();
  const bikes = data.data;

    return (
        <div>
            <Navbar/>
           <div className='max-w-7xl mx-auto lg:max-[1420px] bg-[#0a0a0a] py-16 px-4 sm:px-8 lg:px-12'>
                <div className="text-4xl font-bold1">
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bikes.map((bike) => (
          <OurBikeCard key={bike._id} bike={bike}></OurBikeCard>
        ))}
      </div>
                </div>
           </div>
            <Footer/>
        </div>
    );
};

export default AccessoriesPage;