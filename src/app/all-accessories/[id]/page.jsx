import DetailsCard from '@/components/Cards/DetailsCard/DetailsCard';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const page = async({params}) => {
    const {id} = await params; 

    const res  = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/all-accessories/${id}`)
    const data = await res.json()
    const detailsData = data?.result; 

    // console.log("hello data", detailsData)
   
    return (
        <div>
            <Navbar/>
            <DetailsCard bike={detailsData}/>
            <Footer/>
        </div>
    );
};

export default page;