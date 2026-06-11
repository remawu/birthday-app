import { useState } from 'react'

interface OpeningPageProps {
  onTap: () => void
  isTransitioning: boolean
}

export default function OpeningPage({ onTap, isTransitioning }: OpeningPageProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="fixed inset-0 w-screen h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(255,182,193,0.35) 0%, rgba(255,228,233,0.2) 40%, #FFF8F5 70%)',
      }}
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sticker-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.7}s`,
              opacity: 0.15,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFB6C1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(ellipse at center, #FFB6C1 0%, #FFE4E9 50%, #FFF8F5 100%)',
          transform: isTransitioning ? 'scale(3)' : 'scale(0)',
          opacity: isTransitioning ? 1 : 0,
          transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
        }}
      />

      <button
        onClick={onTap}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative z-10
          px-12 py-5
          rounded-full
          font-script text-3xl md:text-4xl
          text-hot-pink
          bg-light-pink
          border-2 border-soft-pink
          shadow-lg
          animate-pulse-scale
          transition-all duration-300 ease-out
          cursor-pointer
          hover:bg-soft-pink hover:text-white hover:shadow-xl hover:scale-110
          active:scale-95
        `}
        style={{
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'scale(0.8)' : isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'opacity 0.5s ease-out, transform 0.3s ease-out, background-color 0.3s ease-out, color 0.3s ease-out, box-shadow 0.3s ease-out',
          textShadow: '1px 1px 2px rgba(255,182,193,0.3)',
          boxShadow: isHovered
            ? '0 8px 30px rgba(255,105,180,0.3), 0 0 20px rgba(255,182,193,0.4)'
            : '0 4px 15px rgba(255,182,193,0.3)',
        }}
      >
        <span className="relative z-10">Tap me?</span>
      </button>

      <div
        className="absolute pointer-events-none"
        style={{
          opacity: isTransitioning ? 0 : 0.6,
          transition: 'opacity 0.5s ease-out',
        }}
      >
        <div
          className="absolute animate-sticker-float"
          style={{ left: '-80px', top: '-40px', animationDelay: '0s' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill="#FFB6C1" opacity="0.6" />
          </svg>
        </div>
        <div
          className="absolute animate-sticker-float"
          style={{ left: '60px', top: '-50px', animationDelay: '1.2s' }}
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill="#FF69B4" opacity="0.5" />
          </svg>
        </div>
        <div
          className="absolute animate-sticker-float"
          style={{ left: '-70px', top: '30px', animationDelay: '2s' }}
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill="#FFD1DC" opacity="0.7" />
          </svg>
        </div>
        <div
          className="absolute animate-sticker-float"
          style={{ left: '50px', top: '40px', animationDelay: '0.8s' }}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill="#FFB6C1" opacity="0.4" />
          </svg>
        </div>
      </div>
    </div>
  )
}