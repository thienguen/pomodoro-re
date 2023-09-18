import { FC } from 'react'
import Modal from '@/components/ui/modal'

interface SettingModalProps {
  onClose: () => void
}

const SettingModal: FC<SettingModalProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className='px-10 pt-16'>
        <h2 className='mb-4 text-lg font-bold uppercase text-gray-500'>Timer Settings</h2>

        <hr className='my-4 border-t border-gray-300' />
        <p className='mb-8 text-gray-400'>{`I'm ain't implementing another zustand store`}</p>

        <hr className='my-4 border-t border-gray-300' />
        <p className='mb-8 text-gray-400'>{`I'm ain't implementing another zustand store`}</p>

        <hr className='my-4 border-t border-gray-300' />
        <p className='mb-8 text-gray-400'>{`I'm ain't implementing another zustand store`}</p>
      </div>
    </Modal>
  )
}

export default SettingModal
