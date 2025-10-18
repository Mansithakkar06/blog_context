import React from 'react'

function Button({text,type='submit'}) {
    return (
        <div className='flex justify-center'>
            <button
                type={type}
                className='bg-green-700 rounded-lg py-3 px-7 text-white'>{text}</button>
        </div>
    )
}

export default Button
