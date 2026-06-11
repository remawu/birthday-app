import { useEffect, useState } from 'react'

const floatingStickers = [
  { id: 1, src: '/sticker-1.png', alt: 'Pink sparkle star', left: '8%', top: '15%', size: 70, delay: '0s', duration: '4s' },
  { id: 2, src: '/sticker-2.png', alt: 'Pink polka dot bow', right: '10%', top: '12%', size: 80, delay: '1s', duration: '4.5s' },
  { id: 3, src: '/sticker-3.png', alt: 'Pink lace heart', left: '5%', bottom: '25%', size: 65, delay: '2s', duration: '3.8s' },
  { id: 4, src: '/sticker-4.png', alt: 'Cute cupcake', right: '8%', bottom: '20%', size: 75, delay: '1.5s', duration: '4.2s' },
  { id: 5, src: '/sticker-1.png', alt: 'Pink sparkle star', right: '20%', top: '8%', size: 45, delay: '0.5s', duration: '3.5s' },
  { id: 6, src: '/sticker-3.png', alt: 'Pink lace heart', left: '18%', top: '10%', size: 50, delay: '2.5s', duration: '4.8s' },
  { id: 7, src: '/sticker-4.png', alt: 'Cute cupcake', right: '5%', top: '40%', size: 55, delay: '1.2s', duration: '4s' },
  { id: 8, src: '/sticker-2.png', alt: 'Pink polka dot bow', left: '3%', top: '45%', size: 60, delay: '3s', duration: '3.6s' },
]

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
      {floatingStickers.map((sticker) => (
        <div
          key={sticker.id}
          className="absolute animate-sticker-float pointer-events-none select-none"
          style={{
            left: sticker.left,
            right: sticker.right,
            top: sticker.top,
            bottom: sticker.bottom,
            animationDelay: sticker.delay,
            animationDuration: sticker.duration,
            opacity: isLoaded ? 0.85 : 0,
            transition: 'opacity 1s ease-out',
          }}
        >
          <img
            src={sticker.src}
            alt={sticker.alt}
            width={sticker.size}
            height={sticker.size}
            className="drop-shadow-md"
            loading="eager"
          />
        </div>
      ))}

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-hot-pink tracking-wide mb-2"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
            textShadow: '2px 2px 4px rgba(255,182,193,0.3)',
          }}
        >
          HAPPY BIRTHDAY!!!!
        </h1>

        <p
          className="font-script text-xl sm:text-2xl md:text-3xl lg:text-4xl text-soft-pink mb-6 sm:mb-8"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s',
          }}
        >
          my pretty fiancee ayesha
        </p>

        <div
          className="relative cake-shimmer animate-glow-pulse rounded-full flex items-center justify-center"
          style={{
            width: '192px',
            height: '192px',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'scale(1)' : 'scale(0.9)',
            transition: 'opacity 1s ease-out 0.7s, transform 1s ease-out 0.7s',
          }}
        >
          <img
            src="/hero-cute.png"
            alt="meow"
            className="w-full h-full drop-shadow-xl"
            style={{ objectFit: 'cover', borderRadius: '50%' }}
            loading="eager"
          />
        </div>

        <p
          className="font-script text-base sm:text-xl md:text-2xl text-dusty-rose mt-4 sm:mt-6 italic px-4"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 1s, transform 0.8s ease-out 1s',
          }}
        >
          MAY U ACHIEVE THE BEST IN LIFEE!!! (with me duh)
        </p>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{
          opacity: isLoaded ? 0.6 : 0,
          transition: 'opacity 1s ease-out 1.5s',
        }}
      >
        <span className="font-script text-sm text-soft-pink mb-2">Scroll down</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFB6C1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}