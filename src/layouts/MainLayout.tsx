import React from 'react'
import Navbar from './Navbar'

type Props = {
    children: React.ReactNode;
}

export default function MainLayout({ children, ...props }: Props) {
    return (
        <div {...props} className='min-h-screen h-full w-full flex flex-col'>
            <div className='h-full w-full'>
                <Navbar />
                <div className='h-full lg:py-20 py-32'>
                    {children}
                </div>
            </div>
            <footer className='flex items-center justify-center text-sm py-3 fixed w-full bottom-0'>
                &copy;2025 - Untung Budiman
            </footer>
        </div>
    )
}
