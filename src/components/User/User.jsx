import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='w-full bg-white mt-40 mb-40'>
        <div 
            className='bg-gray-600 rounded-lg mx-32 text-white text-center text-3xl p-4'
        >
            User : {userid}
        </div>
    </div>
    
  )
}

export default User