import { useState } from 'react'

interface MessageSectionProps {
  isVisible: boolean
}

export default function MessageSection({ isVisible }: MessageSectionProps) {
  const [notes, setNotes] = useState([
    { id: 1, text: 'HIIIHIII BABYYYY i just wanted you to know that your the best and most wonderful person in the entire world!!! you have no idea how much joy you have given to me in life... heh', author: 'dale' },
    { id: 2, text: 'YOUR NOW 15 BABYY!!!! taht means now were now the same age technically🤔🤔 which means no more calling me daddy anymore😊😢 (pls continue calling me that okay)', author: 'also dale' },
    { id: 3, text: 'did you know your the most beautiful dazzling amazing best gorgeous sparkling radiant stunning enchanting genuine kind hot thoughtful courageous MOST PRETTY GIRL IN THE ENTIRE WORLDD!!!!! 😊', author: 'and... dale' },
  ])

  const [newNote, setNewNote] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [showForm, setShowForm] = useState(false)

  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { id: Date.now(), text: newNote.trim(), author: newAuthor.trim() || 'Anonymous' }])
      setNewNote('')
      setNewAuthor('')
      setShowForm(false)
    }
  }

  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10 animate-sticker-float" style={{ animationDelay: '0s' }}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="#FFB6C1">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-sticker-float" style={{ animationDelay: '1.5s' }}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="#FF69B4">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-2">
        <h2
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-hot-pink text-center mb-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          I WISH YOU THE BESTT IN LIFEEE
        </h2>

        <div
          className="flex items-center justify-center gap-3 mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease-out 0.2s',
          }}
        >
          <div className="h-px w-12 sm:w-16 bg-soft-pink" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFB6C1">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="h-px w-12 sm:w-16 bg-soft-pink" />
        </div>

        <div
          className="text-center mb-12 px-2"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
          }}
        >
          <p className="text-base sm:text-lg md:text-xl text-dusty-rose leading-relaxed">
            i loveee youu sooo soo osoo muchhh babyyy!!! you deserve all the happiness and everything in the world and ill make sure to always stay by your side no matter waht happens in lifee!!! i know you have the bravest soul and the will to keep going in life so lets enjoy our mornings, afternoons, evenings, and midnight together to the fullesttt before we reach old age!!
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 px-2">
          {notes.map((note, index) => (
            <div
              key={note.id}
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md border border-soft-pink/30 hover:shadow-lg hover:border-soft-pink/50 transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease-out ${0.4 + index * 0.15}s, transform 0.6s ease-out ${0.4 + index * 0.15}s, box-shadow 0.3s ease-out, border-color 0.3s ease-out`,
              }}
            >
              <div className="absolute -top-3 -left-2 text-4xl text-soft-pink/30 font-display select-none">"</div>
              <p className="text-dusty-rose text-sm sm:text-base italic mb-3 pl-4">{note.text}</p>
              <p className="text-right text-xs sm:text-sm text-soft-pink font-script">— {note.author}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 text-center px-2"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease-out 0.8s',
          }}
        >
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-light-pink text-hot-pink font-script text-base sm:text-lg border border-soft-pink/40 hover:bg-soft-pink hover:text-white transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
              Leave a note of yours
            </button>
          ) : (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md border border-soft-pink/30 max-w-md mx-auto">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Write your birthday wish!!!"
                className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl border border-soft-pink/30 bg-cream/50 text-dusty-rose placeholder:text-dusty-rose/50 focus:outline-none focus:border-soft-pink focus:ring-2 focus:ring-soft-pink/20 resize-none"
                rows={3}
              />
              <input
                type="text"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="Your name (full name & marcial as ur last name🥺)"
                className="w-full mt-3 p-2 sm:p-3 text-sm sm:text-base rounded-xl border border-soft-pink/30 bg-cream/50 text-dusty-rose placeholder:text-dusty-rose/50 focus:outline-none focus:border-soft-pink focus:ring-2 focus:ring-soft-pink/20"
              />
              <div className="flex gap-2 sm:gap-3 mt-4 justify-center flex-wrap">
                <button
                  onClick={handleAddNote}
                  className="px-4 sm:px-6 py-2 rounded-full bg-hot-pink text-white font-script text-base sm:text-lg hover:bg-soft-pink transition-colors duration-300 cursor-pointer"
                >
                  Add Note
                </button>
                <button
                  onClick={() => {
                    setShowForm(false)
                    setNewNote('')
                    setNewAuthor('')
                  }}
                  className="px-4 sm:px-6 py-2 rounded-full bg-light-pink text-dusty-rose font-script text-base sm:text-lg hover:bg-soft-pink/30 transition-colors duration-300 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}