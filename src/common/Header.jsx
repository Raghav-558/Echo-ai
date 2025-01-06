import React, { useState, useEffect } from 'react'
import { HEADER_LIST } from '../utils/helper'
import CustomButton from './CustomButton'
import logo from '../assets/images/page-logo.webp'
import { CloseIcon, MenuIcon } from '../utils/icons'

const Header = () => {
  const [open, setOpen] = useState()

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1025) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }
    handleOverflow()
    window.addEventListener('resize', handleOverflow)
    return () => {
      window.removeEventListener('resize', handleOverflow)
    }
  }, [open])

  return (
    <>
      <div className='flex items-center justify-between w-full pt-[14px]'>
        <a href='#logo'>
          <img
            src={logo}
            alt='page-logo'
            className='h-[72px] pointer-events-none max-lg:h-10'
          />
        </a>
        <ul className='flex items-center justify-between gap-8 max-lg:hidden'>
          {HEADER_LIST.map((obj, i) => (
            <li key={i}>
              <a
                href={obj.link}
                className='leading-5 text-white hover:text-dark-blue transition-all duration-300'
              >
                {obj.title}
              </a>
            </li>
          ))}
        </ul>
        <CustomButton
          buttonText={'Get Started'}
          myClass={
            'max-lg:hidden py-[13.5px] px-[32.48px] button-bg hover:bg-white'
          }
        />
        <div
          className='lg:hidden z-30 cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      <div
        className={`fixed flex flex-col justify-center items-center transition-all duration-500 w-full h-full left-0 lg:-top-full z-20 bg-black ${
          open ? 'top-0 left-0' : '-top-full'
        }`}
      >
        <ul className='flex flex-col items-center gap-8'>
          {HEADER_LIST.map((obj, i) => (
            <li key={i}>
              <a
                onClick={() => setOpen(false)}
                href={obj.titleHref}
                className='text-base leading-5 text-white'
              >
                {obj.title}
              </a>
            </li>
          ))}
          <CustomButton
            customOnClick={() => setOpen(false)}
            buttonText={'Get Started'}
            myClass={' py-[13.5px] px-[32.48px] bg-dark-blue'}
          />
        </ul>
      </div>
    </>
  )
}

export default Header
