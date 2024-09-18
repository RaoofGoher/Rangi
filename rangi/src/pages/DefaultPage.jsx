import React from 'react'
import DefaultCard from '../components/DefaultCard'
import mainImage from '../assets/rangiMain.jpg' 
const DefaultPage = () => {
  return (
    <>
    <div className='flex flex-col justify-between items-center '>
      <img src={mainImage} alt='Rangi Main Image'  className='w-full h-64 max-w-md object-cover border-2 border-entjGolden rounded-lg shadow-md mt-2'  />
      <div className='flex flex-row justify-between items-center '>
      <DefaultCard type={'customer'}/>
      <DefaultCard type={'pro'}/>
      </div>
    </div>
    </>
  )
}

export default DefaultPage
