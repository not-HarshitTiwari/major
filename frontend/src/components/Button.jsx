import React from 'react'

function Button({value = "Button",
  className = '',
  type = 'button',
  ...rest
}) {
  return (
    <div className='w-full flex justify-center'>
      <button
        type={type}
        className={`border-2 border-gray-200 rounded-md p-2 hover:bg-blue-800 ${className}`}
        {...rest}
      >
        {value}
      </button>
    </div>
  );
}

export default Button