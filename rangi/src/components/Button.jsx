import React from 'react';

const Button = ({ text, isCustomer }) => {
    const baseClasses = 'bg-white font-bold py-2 px-4 rounded m-1 border-2 border';
    const hoverBgColor = isCustomer ? 'hover:bg-customer-color' : 'hover:bg-pro-color';
    const textColor = isCustomer ? 'text-customer-color' : 'text-pro-color';
    const hoverTextColor = 'hover:text-white';

    return (
        <button className={`${baseClasses} ${hoverBgColor} ${hoverTextColor} ${textColor}`}>
            {text}
        </button>
    );
}

export default Button;
