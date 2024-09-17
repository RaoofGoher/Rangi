import React from 'react'
import { useParams } from 'react-router-dom';


const Home = () => {

    const { username } = useParams();
  return (
    <div>
     <p>this is home component for </p>
     <h1>{username}</h1>
    </div>
  )
}

export default Home
