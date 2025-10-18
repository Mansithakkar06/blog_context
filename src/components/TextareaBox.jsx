import React from 'react'

function TextareaBox({id,label,rows=5,cols=58,placeholder,value,onChange}) {
  return (
    <div>
       <label htmlFor={id}>{label}</label><br />
          <textarea
            rows={rows}
            cols={cols}
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={onChange}
            className='bg-gray-400 rounded-md mx-10 my-2 p-1 border border-gray-800/30'>
          </textarea>

    </div>
  )
}

export default TextareaBox
