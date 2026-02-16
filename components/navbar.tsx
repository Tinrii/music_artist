"use client";

import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-20 px-8 sm:px-20 z-50 bg-transparent absolute top-0 left-0 w-full'>
            <h1 className="text-xl font-bold tracking-tighter uppercase">Petra</h1>
            <ul className='hidden md:flex justify-center items-center h-full gap-10 text-white/70 text-sm font-medium'>
                <li><Link href="#" className='hover:text-white transition-colors duration-300'>Home</Link></li>
                <li><Link href="#music" className='hover:text-white transition-colors duration-300'>Pesme</Link></li>
                <li><Link href="#contact" className='hover:text-white transition-colors duration-300'>Kontakt</Link></li>
            </ul>
            <div className="flex items-center gap-4">
                <button className="px-6 py-2 border cursor-pointer border-white/20 rounded-full text-xs font-semibold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest">
                    Spotify
                </button>
            </div>
        </nav>
    )
}

export default Navbar

