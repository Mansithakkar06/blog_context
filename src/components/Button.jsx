import React from 'react'

function Button({children,type='submit'}) {
    return (
        <div className='flex justify-center'>
            <button
                type={type}
                className='bg-green-700 rounded-lg py-3 px-7 my-2 text-white'>{children}</button>
        </div>
    )
}

export default Button
