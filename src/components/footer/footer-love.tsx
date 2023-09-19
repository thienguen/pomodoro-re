import { Tooltip } from '@/components/ui/tooltip'
import { metadata } from '@/lib/type/metadata'

export default function FooterLove() {
  return (
    <span className='ml-2 mr-3 sm:balanced text-base font-medium'>
      <span className='opacity-95 dark:opacity-70'>{`© 2023 `}</span>
      <a href={`${metadata.discord}`} target='_blank'>
        <Tooltip text='find me here'>
          <span className='font-medium opacity-100 transition-colors duration-200 ease-in-out hover:text-pink-500 dark:hover:text-pink-500'>
            Thien Nguyen
          </span>
        </Tooltip>
      </a>
      <span className='opacity-95 dark:opacity-70'>{` • from a boy who was never enough.`}</span>
    </span>
  )
}
