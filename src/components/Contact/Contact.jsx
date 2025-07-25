import React from 'react';

export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-gradient-to-b from-white via-blue-50 to-sky-100 dark:from-[#0f0f0f] dark:via-[#1a1a2e] dark:to-black text-gray-900 dark:text-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden shadow-lg rounded-lg border border-gray-300 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-[#1a1a2e]">
            {/* Left Info Section */}
            <div className="p-6 mr-2 bg-blue-100 dark:bg-[#1f1f2f] sm:rounded-l-lg">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Get in touch:
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 mt-2">
                Fill in the form to start a conversation
              </p>

              {/* Location */}
              <div className="flex items-center mt-8 text-gray-700 dark:text-gray-300">
                <svg className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="ml-4 text-md font-semibold w-40">Patna, Bihar, India</span>
              </div>

              {/* Phone */}
              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-300">
                <svg className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="ml-4 text-md font-semibold w-40">+91 9241679949</span>
              </div>

              {/* Email */}
              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-300">
                <svg className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="ml-4 text-md font-semibold w-40">aditiprakash173@gmail.com</span>
              </div>
            </div>

            {/* Right Form Section */}
            <form className="p-6 bg-white dark:bg-[#0f0f0f] flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-100 dark:bg-white text-black border border-gray-400 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="email" className="hidden">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-100 dark:bg-white text-black border border-gray-400 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="tel" className="hidden">Phone</label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-100 dark:bg-white text-black border border-gray-400 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-6 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
