import { useEffect, useRef, useState } from 'react'
import HeroSection from './HeroSection'
import MessageSection from './MessageSection'
import Footer from './Footer'

export default function MainPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const messageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.2 }
    )

    if (messageRef.current) observer.observe(messageRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: 'linear-gradient(180deg, #FFF8F5 0%, #FFF0F3 30%, #FFE8F0 60%, #FFF8F5 100%)',
      }}
    >
      <HeroSection />
      <div id="message-section" ref={messageRef}>
        <MessageSection isVisible={visibleSections.has('message-section')} />
      </div>
      <Footer />
    </div>
  )
}