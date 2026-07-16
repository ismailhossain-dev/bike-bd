import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
            <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center group">
              <Image width={60} height={60} src="/assets/bike-logo.png"
              className='rounded-full'
               alt="bike-bd logo" />
            </div>

            <h1 className='text-2xl  text-white font-bold'>BikeDB</h1>
          </Link>
  )
}

export default Logo