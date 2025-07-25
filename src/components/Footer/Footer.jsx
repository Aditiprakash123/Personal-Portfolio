import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-white via-gray-100 to-slate-200 dark:from-black dark:via-[#1a1a2e] dark:to-[#0f0f0f] text-gray-800 dark:text-white border-t border-gray-300 dark:border-[#333]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between items-center">
                    {/* Logo */}
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <span className="text-2xl font-bold text-[#a259ff]">AditiPrakash</span>
                        </Link>
                    </div>

                    {/* Sections */}
                    <div className="flex flex-col sm:flex-row gap-12 items-center justify-center w-full mt-6 md:mt-0">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold uppercase text-center">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium text-center">
                                <li className="mb-2">
                                    <Link to="/" className="hover:underline hover:text-pink-400">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline hover:text-pink-400">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold uppercase text-center">Follow Me</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium text-center">
                                <li className="mb-2">
                                    <a href="https://github.com/Aditiprakash123" target="_blank" rel="noreferrer" className="hover:underline hover:text-pink-400" aria-label="GitHub Profile">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/aditi-prakash-32861a317/" target="_blank" rel="noreferrer" className="hover:underline hover:text-pink-400" aria-label="LinkedIn Profile">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-300 dark:border-gray-600 sm:mx-auto lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400 sm:text-center">
                        © 2025 <span className="text-pink-400 font-semibold">AditiPrakash</span>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 text-gray-600 dark:text-gray-400">
                        <a href="https://www.instagram.com/diva_aditi08/" className="hover:text-pink-400 transition" aria-label="Instagram Profile">Instagram</a>
                        <a href="https://discord.com/users/aditiprakash0129_71463" className="hover:text-pink-400 transition" aria-label="Discord Profile">Discord</a>
                        <a href="https://github.com/Aditiprakash123" className="hover:text-pink-400 transition" aria-label="GitHub Profile">GitHub</a>
                        <a href="https://www.linkedin.com/in/aditi-prakash-32861a317/" className="hover:text-pink-400 transition" aria-label="LinkedIn Profile">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
