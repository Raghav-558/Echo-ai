import React from 'react'
import FooterLogo from '../assets/images/footer-logo.webp'
import { FOOTER_LIST, SOCIAL_LINKS } from '../utils/helper'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='bg-navy-blue pt-[356px] max-xl:pt-[300px] max-lg:pt-20 max-sm:pt-[60px]' id='about'>
      <div className='max-w-[1172px] px-4 mx-auto'>
        <div className='flex justify-between max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-10'>
          <a href='#footerlogo'>
            <img
              src={FooterLogo}
              alt='footer-Logo'
              className='max-w-[150px] max-sm:max-w-[100px] pointer-events-none'
            />
          </a>
          <div className='flex flex-col gap-[14px]'>
            <p className='leading-5 max-sm:leading-4 text-white'>Quick Links</p>
            {FOOTER_LIST.map((obj, i) => (
              <a
                key={i}
                className='max-sm:text-sm max-sm:leading-4 text-white hover:text-dark-blue transition-all duration-300 opacity-70 cursor-pointer max-sm:text-center'
                href={obj.link}
              >
                {obj.title}
              </a>
            ))}
          </div>
          <div className='flex flex-col'>
            <p className='text-white leading-5 max-sm:leading-4 pb-3 text-whit max-sm:text-sm max-sm:text-center'>
              Send Us An E-mail
            </p>
            <a
              className='text-white leading-6 max-sm:leading-4 opacity-70 cursor-pointer hover:text-dark-blue transition-all duration-300 max-sm:text-center'
              href='mailto:info@echoai.ai'
            >
              info@echoai.ai
            </a>
            <p className='text-white leading-5 max-sm:leading-4 max-sm:text-sm pt-8 max-sm:text-center'>
              Follow Us On
            </p>
            <div className='flex items-center gap-3 pt-[18px]'>
              {SOCIAL_LINKS.map((obj, i) => (
                <a
                  key={i}
                  href={obj.link}
                  target='_blank'
                  className='size-10 rounded-full button-bg flex justify-center items-center hover:scale-110 transition-all duration-300'
                >
                  {obj.social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='pb-[30px] pt-[60px] max-sm:pt-10'>
          <div className='h-0.5 bottom-line w-full'></div>
          <p className='text-white opacity-80 text-center max-sm:text-sm pt-5'>
            Copyright ECHO AI © {currentYear} | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
