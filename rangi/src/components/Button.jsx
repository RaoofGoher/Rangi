import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa';

const Button = ({ text, isCustomer, isLogin }) => {
    const baseClasses = 'bg-white font-bold py-2 px-4 rounded m-1 border-2 border';
    const hoverBgColor = isCustomer ? 'hover:bg-customer-color' : 'hover:bg-pro-color';
    const textColor = isCustomer ? 'text-customer-color' : 'text-pro-color';
    const hoverTextColor = 'hover:text-white';

    return (
        <button className={`${baseClasses} ${hoverBgColor} ${hoverTextColor} ${textColor}`}>
            <span className='flex items-center px-3'>{text} {isLogin ? <span className='px-2'><FaSignInAlt/></span> : <span className='px-2'> <FaUserPlus/> </span> }</span>
        </button>
    );
}

export default Button;
