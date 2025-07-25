import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import DSA from './DSA/Dsa';
import Contact from './Contact/Contact';
import ThemeBtn from './ThemeBtn/ThemeBtn';
import { ThemeProvider } from '../context/Theme';

function Layout() {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light");
    document.querySelector('html').classList.add(themeMode);
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Header />
      <div>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="dsa"><DSA /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
      <Footer />
      <div className="fixed bottom-20 right-6 z-50">
        <ThemeBtn />
      </div>
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce"
      >
        💌 Let's Connect
      </a>
    </ThemeProvider>
  );
}

export default Layout;
