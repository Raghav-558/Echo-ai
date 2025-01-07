import React from 'react'
import Header from '../common/Header'
import CustomButton from '../common/CustomButton'
import HeroImage from '../assets/images/hero-image.webp'
import Circle from '../assets/images/circle.webp'

const Hero = () => {
  return (
    <div className='bg-hero-bg bg-no-repeat bg-cover bg-left bg-navy-blue relative max-lg:pb-[119px] max-md:pb-[60px] lg:min-h-[840px]'>
      <div className='max-w-[1172px] mx-auto px-4'>
        <Header />
        <div className='flex max-md:flex-wrap items-center justify-between pt-[120px] max-lg:pt-20 max-md:pt-[60px]'>
          <div className='text-center max-md:mx-auto'>
            <h1 className='max-w-[705px] text-white font-bold text-7xl leading-[86px] max-lg:text-6xl max-md:text-4xl'>
              Innovate, Automate, Accelerate
            </h1>
            <p className='text-white font-normal text-xl leading-[30px] text-center py-6 max-sm:py-3'>
              Next Gen AI Automation to Scale Your Business.
            </p>
            <CustomButton
              buttonText={'Book A Call Now!'}
              myClass={'py-[19.5px] px-[38.75px] max-sm:py-4 max-sm:px-6 hover:scale-105 transition-all duration-300'}
            />
          </div>
          <img
            src={HeroImage}
            alt='hero'
            className='h-[400px] max-lg:h-96 object-cover max-md:mx-auto max-md:mt-3'
          />
        </div>
        <img
          src={Circle}
          alt='circle'
          className=' absolute left-0 -bottom-40 max-xl:hidden max-w-[322px]'
        />
      </div>
    </div>
  )
}

export default Hero


