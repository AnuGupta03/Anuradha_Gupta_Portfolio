import { useState } from 'react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div id="Homeid">
            <div className="shadow-md rounded-3xl fixed top-0 z-50 left-0 h-[10%] w-full bg-sky-600 text-white hover:shadow-lg hover:shadow-[#ffcd67] transition-all duration-500">
                <div className="flex items-center justify-between h-full">
                    <h1 className="ml-36 font-bold text-xl">Anuradha Gupta</h1>
                    {/* Hamburger icon */}
                    <div className="md:hidden mr-10">
                        <button onClick={toggleMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                    {/* Menu links */}
                    <ul className="hidden md:flex space-x-10 mr-20 font-black">
                        <li className="mx-10 my-10 font-black">
                            <a href="#Homeid" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Home
                            </a>
                        </li>
                        <li className="mx-10 my-10 font-black">
                            <a href="#Aboutid" style={{ textDecoration: 'none', color: 'inherit' }}>
                                About
                            </a>
                        </li>
                        <li className="mx-10 my-10 font-black">
                            <a href="#projectdiv" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Projects
                            </a>
                        </li>
                        <li className="mx-10 my-10 font-black">
                            <a href="#contactid" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile menu popup */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 z-40 flex justify-center items-center ">
                    <div className="bg-sky-600 p-6 rounded-2xl hover:shadow-2xl hover:shadow-[#ffd072] transition-all duration-500">
                        <ul className="flex flex-col items-center space-y-8 ">
                            <li>
                                <a href="#Homeid" onClick={toggleMenu}  style={{ textDecoration: 'none', color: 'whitesmoke', fontSize:24}}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#Aboutid" onClick={toggleMenu} style={{ textDecoration: 'none', color: 'whitesmoke', fontSize:24}}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#projectdiv" onClick={toggleMenu} style={{ textDecoration: 'none', color: 'whitesmoke', fontSize:24}}>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contactid" onClick={toggleMenu} style={{ textDecoration: 'none', color: 'whitesmoke', fontSize:24}}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
