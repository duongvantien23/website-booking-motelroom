import React, {memo} from 'react'

 const inputForm = ({label}) => {
  return (
    <div>
        <label htmlFor='phone' className='text-xs'>{label}</label>
        <input type='text' id='phone' className='outline-none bg-[#dee8fa] p-2 rounded-md w-full'></input>
    </div>
  )
}
export default memo(inputForm);