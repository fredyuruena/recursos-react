import React from 'react'

function UserCard(name, age, country, city, phoneNumber) {
  return (
    <div className='flex flex-col items-center bg-[#647d4f] rounded-4xl shadow-xl'>
    <h5 className='font-sans text-blue-950'>{name}</h5>
    <span>{age} years</span>
    <span>{country}</span>
    <span>{city}</span>
    <span>{phoneNumber}</span>
  </div>
  )
}
 className= serCard
