import React from 'react'

function Input({
  type = "text",
  label,
  className = '',
  ...rest
},ref) {
  return (
    <div>
      {label && <label
      htmlFor={type}
      >
        {label}
      </label>}
      <input
        type={type}
        id= {type}
        className={`border-1 active:border-1 border-gray-200 rounded-md p-2 ${className}`}
        {...rest}
        ref={ref}
      />
      
    </div>
  )
}

export default React.forwardRef(Input)