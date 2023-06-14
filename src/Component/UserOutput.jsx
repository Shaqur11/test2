import React from 'react'

export const UserOutput = (props) => {
  return (
    <div>
        {/* the name and occupation */}
        <p className=" color to-blue-700">My name is {props.username}</p>
        <p className=' font-semibold'>I am a Pornstar</p>
    </div>
  )
}
