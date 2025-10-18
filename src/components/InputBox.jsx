import React, { useState } from 'react'

function InputBox({ type = "text", id, label,value, placeholder,onChange }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className='bg-gray-400 rounded-md mx-2 my-2 p-1 w-md border border-gray-800/30' />
        </div>
    )
}

export default InputBox
