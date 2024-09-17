import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import Modal from './Modals'; // Import the Modal component

const LoggedInNavbar = () => {
    const { authenticated, isCustomer, userName } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectionData, setSelectionData] = useState(null); // Store the final selection

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Function to handle saving data from the modal
    const handleSave = (data) => {
        setSelectionData(data);
        console.log('Final Data:', data); // You can store or use this data as needed
    };

    return (
        <div className={`flex justify-between border border-2 bg-${isCustomer === 'yes' ? 'customer-color' : 'pro-color'} rounded-lg items-center p-4`}>
            <h1 className='text-white text-3xl'>Hello {userName}</h1>
            <div className='flex justify-between space-x-4 p-4'>
                <Link to={`/dashboard/${userName}/home`}>
                    <h3 className='text-white text-1xl border border-2 p-1'>Home</h3>
                </Link>
                <span onClick={openModal} className='cursor-pointer text-white text-1xl'>
                    orders
                </span>
                <h3 className='text-white text-1xl'>requests</h3>
                <h3 className='text-white text-1xl'>claims</h3>
            </div>

            {/* Using the Modal Component */}
            <Modal isOpen={isModalOpen} onClose={closeModal} onSave={handleSave} />
        </div>
    );
};

export default LoggedInNavbar;
