import { FooterBar, FooterLove } from '@/components/footer'
import Presence from '@/components/footer/lanyard/presence'

export default function Footer() {
  return (
    <>
      <footer className='mb-4 flex justify-center'>
        <div className='mx-auto w-full max-w-2xl'>
          {/* Lanyard */}
          <div className='flex w-full flex-row justify-start'>
            <Presence />
          </div>

          {/* The bar */}
          <div className='lg:w-full md:w-full w-11/12 mx-auto'>
            <FooterBar isFullWidth={true} />
          </div>

          {/* Content */}
          <div className='flex w-full items-center justify-center text-center'>
            <FooterLove />
          </div>
        </div>
      </footer>
    </>
  )
}
