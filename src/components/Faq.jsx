import React, { useState } from 'react'
import SubHeading from '../common/SubHeading'
import { ArrowIcon } from '../utils/icons'
import { FAQ_LIST } from '../utils/helper'

const Faq = () => {
  const [active, setActive] = useState(0)
  const toggle = i => {
    setActive(active === i ? null : i)
  }
  return (
    <div className='bg-navy-blue py-[210px] max-lg:py-[60px]'>
      <div className='max-w-[1174px] mx-auto px-4'>
        <SubHeading text={'FAQs'} myClass={'pb-[60px] max-lg:pb-10'} />
        <div className='max-w-[1022px] mx-auto flex flex-col gap-6 max-sm:gap-4'>
          {FAQ_LIST.map((obj, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 max-sm:p-4 border border-solid  ${
                active === i
                  ? 'border-dark-blue'
                  : 'border-white border-opacity-10'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className={`flex items-center justify-between font-medium text-xl leading-6 text-white w-full text-left bg-transparent max-sm:text-lg max-sm:leading-6 ${
                  active === i ? 'pb-4' : ''
                }`}
              >
                {obj.title}
                <span
                  className={`transition-all duration-300 ${
                    active === i ? 'rotate-180 ' : ''
                  }`}
                >
                  <ArrowIcon />
                </span>
              </button>
              <p
                className={`text-white max-w-[950px] max-md:text-sm transition-all duration-300 overflow-hidden max-sm:overflow-y-auto ${
                  active === i ? 'max-h-32 ' : 'max-h-0'
                }`}
              >
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
