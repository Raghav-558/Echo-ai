import React, { useState } from 'react'
import { BackToTopIcon, DoubleArrow } from '../utils/icons'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  window.onscroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-5 right-5 z-30 border-blue-500 border rounded-lg flex justify-center'
        >
          <BackToTopIcon />
        </button>
      )}
    </div>
  )
}

export default BackToTop
