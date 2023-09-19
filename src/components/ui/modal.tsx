'use client'

import { useEffect, useRef, FC, useState } from 'react'
import { BiWindowClose } from 'react-icons/bi'
import Button from '@/components/ui/icon-button'

interface ModalProps {
  className?: string
  children: React.ReactNode
  onClose?: () => void
}

const Modal: FC<ModalProps> = ({ children, className, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  // If an onClose callback is provided, we'll use it; otherwise, we'll manage the state locally
  const [isVisible, setIsVisible] = useState(onClose ? undefined : true)

  const closeModal = () => {
    if (onClose) {
      onClose()
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (onClose === undefined && !isVisible) return null

  return (
    <div className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-40 px-6'>
      <div className='absolute h-full w-full'></div>
      <div
        className={`relative w-full max-w-md rounded-md border-b-2 border-t-2 border-gray-300 bg-white  shadow-lg ${className}`}
        ref={modalRef}
      >
        {/* The setting input stuff */}
        {children}

        {/* Absolute the close one with no confirmation */}
        <button
          className='absolute right-0 top-0 m-4 rounded-full bg-transparent p-3 hover:bg-black hover:bg-opacity-20'
          onClick={closeModal}
        >
          <BiWindowClose className='h-7 w-7' />
        </button>
        {/* Footer, Like, confirm setting  */}
        <footer className='flex justify-end rounded-b bg-gray-200 p-4'>
          <Button onClick={closeModal}>OK</Button>
        </footer>
      </div>
    </div>
  )
}

export default Modal
