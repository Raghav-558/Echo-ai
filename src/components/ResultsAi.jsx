import React from 'react'
import SubHeading from '../common/SubHeading'
import { RESULTS_LIST } from '../utils/helper'

const ResultsAi = () => {
  return (
    <div className='bg-navy-blue -mb-0.5 pt-[58px]'>
      <div className='max-w-[1138px] mx-auto'>
        <div className='flex justify-center items-center max-lg:flex-wrap gap-y-10 max-md:gap-[30px]'>
          {RESULTS_LIST.map((obj, i) => (
            <div key={i}
              className={`w-1/3 max-lg:w-1/2 max-md:w-full flex justify-center max-md:pr-0 pr-[17px] side-border ${
                i === 1
                  ? 'max-lg:border-r-0'
                  : i === 2
                  ? '!border-r-0 max-lg:w-full max-lg:pr-0 '
                  : ''
              }`}
            >
              <div className='flex flex-col items-center justify-center max-w-[365px]'>
                <SubHeading
                  myClass={'pb-2 max-sm:pb-1'}
                  text={obj.title}
                />
                <p
                  className={`max-w-[146px] text-center text-white max-md:text-sm ${
                    i === 2 ? 'max-w-[187px]' : 'max-w-[146px]'
                  }`}
                >
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResultsAi
