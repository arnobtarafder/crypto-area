import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-11 py-7 flex md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-sans font-bold text-xl text-zinc-600' to='/'>Crypto Area</Link>
                </div>

            <div className='flex gap-5 text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/coins'>Coins</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                </div>
        </div>
    );
};

export default Header;