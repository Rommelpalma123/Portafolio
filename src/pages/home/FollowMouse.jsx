import { useState, useEffect } from 'react'

export const FollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    const { pageX, pageY } = event
    setPosition({ x: pageX, y: pageY })
  }

  const handleLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        border: '2px solid white',
        opacity: 0.8,
        pointerEvents: 'none',
        left: position.x,
        top: position.y,
        width: 40,
        height: 40,
        transition: 'all 0.1s ease-out',
        display: position.x === 0 && position.y === 0 ? 'none' : 'block'
      }}
    />
  )
}
