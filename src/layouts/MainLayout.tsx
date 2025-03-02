import React from 'react'
import Navbar from './Navbar'

type Props = {
    children: React.ReactNode;
}

export default function MainLayout({ children, ...props }: Props) {
    return (
        <div {...props} className='min-h-screen h-full w-full flex items-center justify-between flex-col'>
            <Navbar />
            <div className='h-full'>
                {children}
            </div>
            <footer className='flex items-center justify-center text-sm'>
                &copy;2025 - Untung Budiman
            </footer>
        </div>
    )
}
