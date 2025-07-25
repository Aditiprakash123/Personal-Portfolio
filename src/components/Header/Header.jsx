import React, { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.theme = newTheme;
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#dsa', label: 'DSA' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-gradient-to-b from-white via-blue-50 to-sky-100 dark:from-[#0f0f0f] dark:via-[#1a1a2e] dark:to-black text-black dark:text-white border-gray-200 dark:border-gray-700 px-4 lg:px-6 py-3 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          {/* Logo */}
          <a href="#home" className="flex items-center">
            <span className="text-2xl font-bold text-[#a259ff]">AditiPrakash</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl px-3 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Toggle Theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-700 dark:text-gray-400 rounded-lg lg:hidden hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Nav Menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`}>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navItems.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className={`duration-200 border-b border-gray-100 lg:border-0
                      text-gray-800 dark:text-white hover:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-800 
                      lg:hover:bg-transparent px-4 py-2 block`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
