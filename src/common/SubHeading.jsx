import React from 'react'

const SubHeading = ({ text, myClass }) => {
  return (
    <h2
      className={`font-outfit font-semibold text-white text-5xl text-center max-lg:text-4xl max-md:text-3xl max-sm:text-2xl leading-[57.7px] max-md:leading-[50px] max-sm:leading-[40px] ${myClass}`}
    >
      {text}
    </h2>
  )
}

export default SubHeading

