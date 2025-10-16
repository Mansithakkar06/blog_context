import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-200 text-black text-center font-medium bottom-0 fixed w-full p-2'>
      ©Mansi{new Date().getFullYear()} All Rights Reserved.
    </div>
  )
}

export default Footer
