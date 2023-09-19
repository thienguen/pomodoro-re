import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { TimerType } from '@/lib/type/pomodoro.type'

dayjs.extend(duration)

export function formatTime(timeLeft: number) {
  return dayjs.duration(timeLeft, 'seconds').format('mm:ss')
}

export function updateTitle(timeLeft: number, type: TimerType) {
  const updatedMessage =
    type === 'Pomodoro' ? 'Time to focus!' : type === 'Short Break' ? 'Time for a break!' : 'Time for a longer break!'
  document.title = `${formatTime(timeLeft)} - ${updatedMessage}`
}

function getFaviconEl() {
  const favicon = document.getElementById('favicon') as HTMLLinkElement
  if (!favicon) {
    console.error('Favicon element not found in the DOM.')
    return null
  }
  return favicon
}

export function updateFavicon(type: TimerType) {
  const favicon = getFaviconEl()

  // Return early if favicon is not present
  if (!favicon) return

  switch (type) {
    case 'Pomodoro':
      favicon.href = '/fav/favicon.ico'
      break
    case 'Short Break':
      favicon.href = '/fav/favicon-green-16x16.png'
      break
    case 'Long Break':
      favicon.href = '/fav/favicon-blue-16x16.png'
      break
    default:
      favicon.href = '/fav/favicon-gray-16x16.png'
      break
  }
}
