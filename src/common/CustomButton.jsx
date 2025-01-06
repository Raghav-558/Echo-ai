import React from 'react'

const CustomButton = ({ buttonText, myClass }) => {
  return (
    <button
      className={`${myClass} text-white font-semibold text-xl leading-6 rounded-[57px] button-bg`}
    >
      {buttonText}
    </button>
  )
}

export default CustomButton
