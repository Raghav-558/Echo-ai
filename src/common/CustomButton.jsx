import React from 'react'

const CustomButton = ({ buttonText, myClass ,customOnClick }) => {
  return (
    <button
      onClick={customOnClick}
      className={`${myClass} text-white font-semibold text-xl leading-6 rounded-[57px] button-bg max-sm:text-base`}
    >
      {buttonText}
    </button>
  )
}

export default CustomButton
