import { FooterBar, FooterLove } from "@/components/footer"

export default function Footer() {
  return (
    <>
      <footer className='flex justify-center mb-4'>
        <div className='mx-auto w-full max-w-2xl'>
          
          {/* Lanyard */}
          {/* TBD */}

          {/* The bar */}
          <div>
            <FooterBar isFullWidth={true} />
          </div>

          {/* Content */}
          <div className='flex w-full items-center justify-center'>
            <FooterLove />
          </div>
        </div>
      </footer>
    </>
  )
}
