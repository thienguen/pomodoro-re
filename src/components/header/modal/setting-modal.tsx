'use client'

import { FC } from 'react'
import Modal from '@/components/ui/modal'
import { Input, Item, Label, Row, Switch } from '@/components/setting'
import { usePomodoroContext } from '@/hooks/pomodoro/usePomodoroContext'

interface SettingModalProps {
  onClose: () => void
}


/**
 * Time setting modal:
 *  - Auto start break
 *  - Auto start pomodoro
 *  - Alarm sound
 *  - Ticking sound
 */
const SettingModal: FC<SettingModalProps> = ({ onClose }) => {
  const { state, setState } = usePomodoroContext()!

  const handleTimeChange = (type: string, newValue: number) => {
    // Create a new array with updated values
    const updatedModes = state.modes.map((mode) => {
      if (mode.type === type) {
        return { ...mode, timeLeft: newValue * 60 } // Convert minutes to seconds
      }
      return mode
    })

    // Update the state with the new modes array
    setState((prevState) => ({ ...prevState, modes: updatedModes }))
  }

  return (
    <Modal onClose={onClose} className=''>
      <div className='max-h-[70vh] min-h-[60vh] overflow-y-auto px-10 py-5'>
        <h2 className='mb-4 mt-8 text-lg font-bold uppercase text-gray-500'>Timer Settings</h2>

        {/* Time setting for all modes */}
        <Item col>
          <Label>Time (minutes)</Label>
          <div
            className='mt-2 flex w-full flex-wrap justify-between'
          >
            {state.modes.map(({ type, timeLeft }) => (
              <Input
                key={type}
                className='w-24'
                onChange={(e) => {
                  const newValue = Number(e.target.value)
                  handleTimeChange(type, newValue)
                }}
                min={0}
                max={60}
                disabled={type === state.type}
                label={type ? type : 'Pomodoro'}
                type='number'
                value={timeLeft / 60}
              />
            ))}
          </div>
        </Item>

        {/* Other settings */}
        {/* ---------------------------------------------- */}
        <Item>
          <Label>Auto start Breaks?</Label>
          <Switch on={state.autoBreak} onClick={() => {
            setState((prevState) => ({ ...prevState, autoBreak: !prevState.autoBreak }))
          }} />
        </Item>

        {/* ---------------------------------------------- */}
        <Item>
          <Label>Auto start Pomodoros?</Label>
          <Switch on={state.autoPomo} onClick={() => {
            setState((prevState) => ({ ...prevState, autoPomo: !prevState.autoPomo }))
          }} />
        </Item>

        {/* ---------------------------------------------- */}

        <Item>
          <Label>Long Break interval</Label>
          <Input
            className='w-16' 
            min={1}
            type='number'
            label=''
            value={1}
            onChange={(e) => {
            }}
          />
        </Item>

        {/* ---------------------------------------------- */}

        <Item col>
          <Row>
            <Label>Alarm Sound</Label>
            {/* <Select
                value={alarmSound}
                items={alarmSounds}
                onChange={(val) => {}}
              /> */}

            <div>Select Alarm Sound</div>
            <div>TBD</div>
          </Row>
        </Item>

        {/* ---------------------------------------------- */}

        <Item col>
          <Row>
            <Label>Ticking Sound</Label>
            <div>Select Ticking Sound</div>
            <div>TBD</div>
          </Row>
        </Item>

        {/* ---------------------------------------------- */}
      </div>
    </Modal>
  )
}

export default SettingModal
