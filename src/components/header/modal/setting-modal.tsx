import { FC } from 'react'
import Modal from '@/components/ui/modal'
import { Input, Item, Label, Row, Switch } from '@/components/setting'
import { modes } from '@/lib/type/pomodoro.type'

interface SettingModalProps {
  onClose: () => void
}

const SettingModal: FC<SettingModalProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose} className=''>
      <div className='max-h-[70vh] min-h-[60vh] overflow-y-auto px-10 py-5'>
        <h2 className='mb-4 mt-8 text-lg font-bold uppercase text-gray-500'>Timer Settings</h2>

        {/* Actual stuff */}
        <Item col>
          <Label>Time (minutes)</Label>
          <div className='mt-2 flex flex-wrap justify-between'>
            {modes.map(({ type, timeLeft }) => (
              <Input
                key={type}
                className='w-24' // approx 6.125rem
                onChange={(e) => {
                  /* functionality */
                }}
                min={1}
                label={type ? type : 'Pomodoro'}
                type='number'
                value={timeLeft}
              />
            ))}
          </div>
        </Item>

        <Item>
          <Label>Auto start Breaks?</Label>
          {/* <Switch on={autoBreaks} onClick={() => {}} /> */}
          <Switch on={false} onClick={() => {}} />
        </Item>

        <Item>
          <Label>Auto start Pomodoros?</Label>
          {/* <Switch on={autoPomodoros} onClick={() => {}} /> */}
          <Switch on={false} onClick={() => {}} />
        </Item>

        <Item>
          <Label>Long Break interval</Label>
          <Input
            className='w-16' // approx 4.375rem
            min={1}
            type='number'
            label=''
            // value={longBreakInterval}
            onChange={(e) => {
              /* functionality */
            }}
          />
        </Item>

        <Item col>
          <Row>
            <Label>Alarm Sound</Label>
            {/* <Select
                value={alarmSound}
                items={alarmSounds}
                onChange={(val) => {}}
              /> */}
            {/* Placeholder until Select component is provided */}
            <div>Select Alarm Sound</div>
          </Row>

          <Row right margin>
            {/* Placeholder until Slider component is provided */}
            <div>Slider for Alarm Volume</div>
          </Row>

          <Row right margin>
            <Input
              className='w-16'
              min={1}
              type='number'
              label='Repeat'
              // value={alarmRepeat}
              // onChange={(e) => { /* functionality */ }}
            />
          </Row>
        </Item>

        <Item col>
          <Row>
            <Label>Ticking Sound</Label>
            {/* Placeholder until Select component is provided */}
            <div>Select Ticking Sound</div>
          </Row>

          <Row right margin>
            {/* Placeholder until Slider component is provided */}
            <div>Slider for Ticking Volume</div>
          </Row>
        </Item>
      </div>
    </Modal>
  )
}

export default SettingModal
