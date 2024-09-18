import React from 'react'

const Footer = () => {
  return (
    <div className='border border-4 border-entjGolden rounded-lg p-2 footer bg-entjGreen text-entjGolden flex justify-between items-center'>
      <div>
      <h1 className='text-xl'>Rangi</h1>

      </div>
      <p>&copy; 2024 Rangi. All Rights Reserved.</p>
      <div className='flex-column'>
      <h1 className="px-4">Home</h1>
      <h1 className="px-4">About</h1>
      <h1 className="px-4">Services</h1>
      <h1 className="px-4">Careers</h1>
      </div>
    </div>
  )
}

export default Footer
