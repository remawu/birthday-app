interface StickerGalleryProps {
  isVisible: boolean
}

const galleryItems = [
  { id: 1, src: '/sticker-1.png', alt: 'Pink sparkle star', label: 'Sparkle' },
  { id: 2, src: '/sticker-2.png', alt: 'Pink polka dot bow', label: 'Bow' },
  { id: 3, src: '/sticker-3.png', alt: 'Pink lace heart', label: 'Love' },
  { id: 4, src: '/sticker-4.png', alt: 'Cute cupcake', label: 'Sweet' },
  { id: 5, src: '/sticker-2.png', alt: 'Pink polka dot bow', label: 'Charm' },
  { id: 6, src: '/sticker-3.png', alt: 'Pink lace heart', label: 'Joy' },
  { id: 7, src: '/sticker-1.png', alt: 'Pink sparkle star', label: 'Dream' },
  { id: 8, src: '/sticker-4.png', alt: 'Cute cupcake', label: 'Delight' },
]

export default function StickerGallery({ isVisible }: StickerGalleryProps) {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Section title */}
      <h2
        className="font-display text-3xl md:text-4xl font-bold text-hot-pink text-center mb-4"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        Birthday Decorations
      </h2>

      {/* Decorative divider */}
      <div
        className="flex items-center justify-center gap-3 mb-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease-out 0.2s',
        }}
      >
        <div className="h-px w-16 bg-soft-pink" />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill="#FFB6C1" />
        </svg>
        <div className="h-px w-16 bg-soft-pink" />
      </div>

      {/* Sticker grid */}
      <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className="group flex flex-col items-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
              transition: `opacity 0.6s ease-out ${0.3 + index * 0.1}s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + index * 0.1}s`,
            }}
          >
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-soft-pink/20 group-hover:shadow-md group-hover:border-soft-pink/40 group-hover:bg-white/80 transition-all duration-300 group-hover:-translate-y-1 cursor-pointer">
              <img
                src={item.src}
                alt={item.alt}
                width={80}
                height={80}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
              {/* Hover sparkle effect */}
              <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill="#FFB6C1" opacity="0.7" />
                </svg>
              </div>
            </div>
            <span className="mt-3 font-script text-lg text-soft-pink group-hover:text-hot-pink transition-colors duration-300">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom decorative element */}
      <div
        className="flex justify-center mt-12"
        style={{
          opacity: isVisible ? 0.4 : 0,
          transition: 'opacity 1s ease-out 1s',
        }}
      >
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill={i % 2 === 0 ? '#FFB6C1' : '#FF69B4'}
              className="animate-sticker-float"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ))}
        </div>
      </div>
    </section>
  )
}