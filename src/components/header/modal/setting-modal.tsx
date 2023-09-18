import { FC } from 'react';
import Modal from '@/components/ui/modal';

interface SettingModalProps {
  onClose: () => void;
}

const SettingModal: FC<SettingModalProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className="pt-16 px-10">
        <h2 className="font-bold uppercase text-gray-500 text-lg mb-4">Timer Settings</h2>

        <hr className="my-4 border-t border-gray-300" />
        <p className="mb-8 text-gray-400">Nah, me no like state managament tool.</p>

        <hr className="my-4 border-t border-gray-300" />
        <p className="mb-8 text-gray-400">Nah, me no like state managament tool.</p>
        
        <hr className="my-4 border-t border-gray-300" />
        <p className="mb-8 text-gray-400">Nah, me no like state managament tool.</p>
      </div>
    </Modal>
  )
}

export default SettingModal;
