import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';


const DefaultCard = ({ type }) => {
  let color = '';
  let isCustomer;
  if (type === 'customer') {
    color = 'bg-customer-color';
  } else {
    color = 'bg-pro-color';
  }

  if (type === 'customer'){
    isCustomer = true;
  }else{
    isCustomer = false;
  }

  return (
    
      <div className={`w-[45vw] h-[20vh] rounded overflow-hidden shadow-lg p-4 m-10 ${color}`}>
        <div className="font-bold text-xl mb-2 text-white">{type === 'customer' ? 'Customer' : 'Profesional'} Login</div>
        <p className="text-white text-base">
          Select this if you want to log in as a {type === 'customer' ? 'Customer' : 'Profesional'}.
        </p>
        <Link to={type === 'customer' ? '/login/customer' : '/login/professional'}><Button isCustomer={isCustomer} text={'Login'}/></Link>
        <Button isCustomer={isCustomer} text={'Sign Up'}/>
      </div>
  
  );
};

export default DefaultCard;
