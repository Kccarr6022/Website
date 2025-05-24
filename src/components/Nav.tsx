import React, { useState } from 'react';
import Image from 'next/image';

const Nav: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white w-full shadow">
            <div className="flex items-center justify-between max-w-5xl mx-auto p-4 w-full">
                {/* Left: Profile Picture and Name */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/kaden.png"
                        alt="Kaden Carr"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                    />
                    <a href="#home" className="text-2xl font-bold ml-2">
                        Kaden Carr
                    </a>
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 list-none m-0 p-0">
                    <li>
                        <a href="/" className="hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="/projects" className="hover:underline">Projects</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:underline">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:underline">Contact</a>
                    </li>
                    <li>
                        <a href="/blog" className="hover:underline">Blog</a>
                    </li>
                </ul>
                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex items-center"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="flex flex-col gap-2 list-none p-4 md:hidden bg-gray-800 border-t border-gray-700">
                    <li>
                        <a href="#home" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:underline" onClick={() => setMenuOpen(false)}>Projects</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline" onClick={() => setMenuOpen(false)}>About</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</a>
                    </li>
                    <li>
                        <a href="/blog" className="hover:underline" onClick={() => setMenuOpen(false)}>Blog</a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Nav;