import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomeContactSection() {
  return (
    <div className="w-full my-8">
      {/* Container class সরিয়ে নেওয়া হয়েছে যাতে ইমেজটি ফুল উইডথ (Full-width) জুড়ে বসে */}
      <div className='w-full relative overflow-hidden shadow-2xl'>
        
        {/* Background Image - w-full এবং object-cover দিয়ে ফুল স্ক্রিন ফিট করা হয়েছে */}
        <Image 
          src="/assets/contact-bike.jpg" 
          width={1920} 
          height={600} 
          alt='contact-image' 
          className='w-full h-[450px] sm:h-[500px] lg:h-[580px] object-cover brightness-75'
        />

        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

        <div className='absolute inset-0 z-10 flex flex-col justify-center py-28 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto'>
          
          <div className="max-w-2xl">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-4">
              Free service for premium <br /> <span className="text-red-600">members</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-xs sm:text-sm font-medium leading-relaxed mb-8">
              If someone’s not there to take your call, you can wait and the automated voice will prompt you to leave a message. We will get back to you as soon as possible.
            </p>
            
            {/* Action Buttons & Contact Info */}
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6'>
              
              {/* Contact Button */}
              <Link 
                href="/contact" 
                className='px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-red-600/30'
              >
                CONTACT US
              </Link>
              
              {/* Phone Info */}
              <div className='flex flex-col   px-5 py-2.5 rounded-xl'>
                <p className=' font-bold text-white uppercase tracking-widest'>CALL US :</p>
                <p className=' text-orange-500 font-bold tracking-wide'>+880 1619-408991</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default HomeContactSection;