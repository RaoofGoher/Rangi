import React from 'react'
import DefaultCard from '../components/DefaultCard'

const DefaultPage = () => {
  return (
    <div className='flex justify-between'>
      <DefaultCard type={'customer'}/>
      <DefaultCard type={'pro'}/>
    </div>
  )
}

export default DefaultPage
