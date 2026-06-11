export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-light-pink/60 border-t border-soft-pink/20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center gap-2 mb-4">
          {[...Array(3)].map((_, i) => (
            <svg
              key={i}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={i === 1 ? '#FF69B4' : '#FFB6C1'}
              className="animate-sticker-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ))}
        </div>

        <p className="font-script text-lg text-hot-pink mb-2">
          made with dalegpt yes pro 100%
        </p>
        <p className="text-sm text-dusty-rose/70">
          made only for my beloved ayesha
        </p>

        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-px w-8 bg-soft-pink/40" />
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFB6C1" opacity="0.5">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="h-px w-8 bg-soft-pink/40" />
        </div>
      </div>
    </footer>
  )
}