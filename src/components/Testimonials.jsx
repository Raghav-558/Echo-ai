import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { TESTIMONIALS_LIST } from '../utils/helper'
import SubHeading from '../common/SubHeading'

const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          infinite: true,
          autoplaySpeed: 3000,
          autoplay: true,
          dots: true
        }
      }
    ]
  }

  return (
    <div className='bg-navy-blue pt-[175px] max-lg:pt-[60px]'>
      <div className='max-w-[1172px] mx-auto px-4'>
        <SubHeading text={'Testimonials'} myClass={'pb-10'} />
        <Slider {...settings}>
          {TESTIMONIALS_LIST.map((obj, i) => (
            <div key={i}>
              <div className='p-[24px_24px_0px_24px] rounded-3xl max-w-[364px] mx-auto slider-bg'>
                <h3 className='text-white pb-[8.39px] text-2xl leading-[28.8px] max-md:leading-[24px] max-lg:text-xl max-md:text-lg'>
                  {obj.title}
                </h3>
                <p
                  className={`text-white opacity-80 max-w-[316px] max-md:text-sm ${
                    i === 2 ? 'pb-6' : 'pb-[47px]'
                  }`}
                >
                  {obj.description}
                </p>
                <div className='flex gap-2 items-center'>
                  <img
                    className='max-w-[60px]'
                    src={obj.profileImage}
                    alt='profileImage'
                  />
                  <div className='flex flex-col'>
                    <h3 className='text-white text-2xl leading-[28.8px] max-md:leading-[24px] max-lg:text-xl max-md:text-lg'>
                      {obj.name}
                    </h3>
                    <p className='text-white max-md:text-sm'>{obj.about}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials
