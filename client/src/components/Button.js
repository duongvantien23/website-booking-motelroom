import React from 'react'

export const Button = (text, textColor,bgColor) => {
  return (
    <button type='button' className={`py-2 px4 ${textColor} ${bgColor} outline-none rounded-md`}>
      {text}
    </button>
  )
}
