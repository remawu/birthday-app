import { useState, useCallback } from 'react'
import OpeningPage from './sections/OpeningPage'
import MainPage from './sections/MainPage'

export default function App() {
  const [showMain, setShowMain] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTap = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => {
      setShowMain(true)
      setIsTransitioning(false)
    }, 800)
  }, [])

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {!showMain && (
        <OpeningPage
          onTap={handleTap}
          isTransitioning={isTransitioning}
        />
      )}
      {showMain && <MainPage />}
    </div>
  )
}
