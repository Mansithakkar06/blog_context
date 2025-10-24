import React from 'react'
import notfound from '../assets/images/error_page.jpg';

function NotFound() {
  return (
    <div className=''>
      <img src={notfound} alt="404" className='w-full h-1/2' />
    </div>
  )
}

export default NotFound
