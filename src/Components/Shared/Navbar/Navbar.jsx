import React from 'react';

const Navbar = () => {

    const navlinks = <>
     <li><a className="font-bold text-orange-500">HOME</a></li>
     <li><a className="font-bold text-orange-500">SKILL</a></li>
     <li><a className="font-bold text-orange-500">PROJECTS</a></li>
     <li><a className="font-bold text-orange-500">CONTUCT ME</a></li>
    </>
    return (
        <div className="navbar sticky bg-black bg-opacity-25 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold text-white no-underline">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   
                   {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn font-bold text-white no-underline">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
