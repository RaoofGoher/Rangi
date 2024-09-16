import React from 'react';
import { Link } from 'react-router-dom';

const DefaultCard = ({ type }) => {
  let color = '';

  if (type === 'customer') {
    color = 'bg-customer-color';
  } else {
    color = 'bg-pro-color';
  }

  return (
    <Link to={type === 'customer' ? '/login/customer' : '/login/professional'}>
      <div className={`w-[45vw] h-[20vh] rounded overflow-hidden shadow-lg p-4 m-10 ${color}`}>
        <div className="font-bold text-xl mb-2 text-white">{type === 'customer' ? 'Customer' : 'Profesional'} Login</div>
        <p className="text-white text-base">
          Select this if you want to log in as a {type === 'customer' ? 'Customer' : 'Profesional'}.
        </p>
      </div>
    </Link>
  );
};

export default DefaultCard;
