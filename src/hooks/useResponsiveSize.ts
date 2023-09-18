import { useState, useEffect } from 'react'

const useResponsiveSize = () => {
  // Initialize with default values
  const [screenWidth, setScreenWidth] = useState(800) // Default width

  const getScaleFactor = () => {
    if (screenWidth <= 480) return 0.7   // Small devices
    if (screenWidth <= 768) return 0.85  // Medium devices
    return 1                             // Large devices
  }

  useEffect(() => {
    // Function to update screen width
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    // Update the state with actual window width once the hook is used
    updateScreenWidth()

    window.addEventListener('resize', updateScreenWidth)
    return () => {
      window.removeEventListener('resize', updateScreenWidth)
    }
  }, [])

  return getScaleFactor
}

export default useResponsiveSize
