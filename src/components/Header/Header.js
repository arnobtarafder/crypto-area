import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-11 py-7 flex md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-sans font-bold text-xl text-zinc-600' to='/'>Crypto Arena</Link>
                </div>

            <div className='flex gap-5 text-xl'>
                <CustomLink className="hover:text-black text-gray-600" to='/'>Home</CustomLink>
                <CustomLink className="hover:text-black text-gray-600" to='/coins'>Coins</CustomLink>
                <CustomLink className="hover:text-black text-gray-600" to='/contact'>Contact</CustomLink>
                <CustomLink className="hover:text-black text-gray-600" to='/about'>About</CustomLink>
                </div>
        </div>
    );
};

export default Header;