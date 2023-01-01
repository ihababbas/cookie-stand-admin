import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


export default function Header(){
    return(
        <header>
            <nav className='flex flex-wrap items-center px-3 bg-green-900'>
            <Link className='inline-flex items-center px-2' href='/'>
                <Image 
                    src='/assets/logo3.png'
                    width={30}
                    height={30}
                    alt="iiiii"
                    />
                
    <span className='text-xl fonr-bold tracking-wide text-white uppercase'>Cookie Stand Admin</span>
             </Link>
             <section className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                    <section className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
                        <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/'>Home</Link>
                        <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/'>Services</Link>
                        <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/about'>About Us</Link>
                        <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/'>Contact Us</Link>
                    </section>
                </section>

            </nav>
          
        </header>
    )
}