# How to Customize Your Birthday App

This guide shows you how to change the cake image, notes, names, colors, and other elements.

---

## 1. Change the Birthday Cake Image 🎂

### Option A: Replace the Existing Image
1. Find your new cake image (PNG or JPG)
2. Go to the `public` folder in your project
3. Replace `hero-cake.png` with your new image (keep the same filename)
4. If using a different name, edit the file path in the code

### Option B: Use a Different Filename
1. Add your image to the `public` folder (e.g., `my-cake.png`)
2. Open `src/sections/HeroSection.tsx`
3. Find this line (around line 87):
   ```tsx
   src="/hero-cake.png"
   ```
4. Replace it with your new image:
   ```tsx
   src="/my-cake.png"
   ```
5. Save and rebuild: `npm run build`

**Tip**: Use free image sites like:
- [Unsplash](https://unsplash.com) - search "birthday cake"
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

---

## 2. Change the Name and Main Title

### Change "Hello Kitty" to Someone's Name
1. Open `src/sections/HeroSection.tsx`
2. Find this line (around line 75):
   ```tsx
   Hello Kitty
   ```
3. Replace with the birthday person's name:
   ```tsx
   Sarah
   ```

### Change "HAPPY BIRTHDAY" Message
1. In the same file (`HeroSection.tsx`), find line 63:
   ```tsx
   HAPPY BIRTHDAY
   ```
2. Change to whatever you want:
   ```tsx
   HAPPY 30TH BIRTHDAY
   ```
   or
   ```tsx
   FELIZ CUMPLEAÑOS
   ```

### Change Decorative Message
1. Find line 104 in `HeroSection.tsx`:
   ```tsx
   Wishing you a day filled with sweetness and joy
   ```
2. Customize it:
   ```tsx
   May your day be as amazing as you are!
   ```

---

## 3. Change the Birthday Notes/Wishes 💌

1. Open `src/sections/MessageSection.tsx`
2. Find the notes array (around line 8):

```tsx
const [notes, setNotes] = useState([
  { id: 1, text: 'May your day be as sweet as this cake! You deserve all the happiness in the world.', author: 'With love' },
  { id: 2, text: 'Another year older, another year more fabulous! Keep shining bright like the star you are.', author: 'XOXO' },
  { id: 3, text: 'Here is to another year of making wonderful memories together. You make life so much brighter!', author: 'Forever friends' },
])
```

3. Edit the messages:
   - **text**: The main message
   - **author**: Who wrote it

Example:
```tsx
const [notes, setNotes] = useState([
  { id: 1, text: 'Happy birthday to the best friend ever!', author: 'Emma' },
  { id: 2, text: 'Cheers to another year of adventures!', author: 'The Squad' },
  { id: 3, text: 'Hope your day is absolutely perfect!', author: 'Mom & Dad' },
])
```

### Add More Notes
```tsx
const [notes, setNotes] = useState([
  { id: 1, text: 'Message 1', author: 'Person 1' },
  { id: 2, text: 'Message 2', author: 'Person 2' },
  { id: 3, text: 'Message 3', author: 'Person 3' },
  { id: 4, text: 'Message 4', author: 'Person 4' },  // Add new note
])
```

---

## 4. Change Section Titles

### Change "Wishing You the Sweetest Day"
1. Open `src/sections/MessageSection.tsx`
2. Find line 53:
   ```tsx
   Wishing You the Sweetest Day
   ```
3. Change it:
   ```tsx
   Messages from Everyone
   ```

### Change the Main Description
1. In `MessageSection.tsx`, find line 81:
   ```tsx
   On this special day, we celebrate you and all the joy you bring into our lives.
   May your year ahead be filled with love, laughter, and endless Hello Kitty moments!
   ```
2. Replace with your custom message:
   ```tsx
   Today is all about celebrating YOU! Get ready for a day full of love, laughter, and surprises.
   ```

---

## 5. Change Colors 🎨

### Change Pink Colors
1. Open `tailwind.config.js`
2. Find the colors section (around line 51-56):

```js
cream: '#FFF8F5',
'soft-pink': '#FFB6C1',
'hot-pink': '#FF69B4',
'light-pink': '#FFE4E9',
'dusty-rose': '#8B5E6B',
blush: '#FFD1DC',
```

3. Replace hex codes with new colors:

**Popular Color Palettes:**
- **Purple Theme**: Change `'hot-pink': '#FF69B4'` to `'hot-pink': '#9D4EDD'`
- **Blue Theme**: Change `'soft-pink': '#FFB6C1'` to `'soft-pink': '#90E0EF'`
- **Gold Theme**: Change `'hot-pink': '#FF69B4'` to `'hot-pink': '#FFD60A'`

**Find Colors:**
- [Color Picker](https://htmlcolorcodes.com)
- [Coolors.co](https://coolors.co)

### Change Background Gradient
1. Open `src/sections/MainPage.tsx`
2. Find line 33-35:
   ```tsx
   style={{
     background: 'linear-gradient(180deg, #FFF8F5 0%, #FFF0F3 30%, #FFE8F0 60%, #FFF8F5 100%)',
   }}
   ```
3. Change the color codes (6 total to modify):
   ```tsx
   style={{
     background: 'linear-gradient(180deg, #E0F7FF 0%, #B0E0FF 30%, #80D0FF 60%, #E0F7FF 100%)',
   }}
   ```

---

## 6. Change Floating Stickers

### Replace Sticker Images
1. Open `src/sections/HeroSection.tsx`
2. Find the `floatingStickers` array (around line 3)
3. Edit the `src` paths:

```tsx
const floatingStickers = [
  { id: 1, src: '/sticker-1.png', alt: 'Pink sparkle star', ... },
  { id: 2, src: '/sticker-2.png', alt: 'Pink polka dot bow', ... },
  // Change to:
  { id: 1, src: '/my-sticker-1.png', alt: 'Sparkle', ... },
  { id: 2, src: '/my-emoji-1.png', alt: 'Emoji', ... },
]
```

### Adjust Sticker Positions
In the same array, modify `left`, `right`, `top`, `bottom`, `size`:

```tsx
{ 
  id: 1, 
  src: '/sticker-1.png', 
  alt: 'Pink sparkle star', 
  left: '8%',      // Change horizontal position
  top: '15%',      // Change vertical position
  size: 70,        // Make bigger or smaller
  delay: '0s',     // Animation delay
  duration: '4s'   // Animation speed
},
```

**Positioning Tips:**
- `left: '10%'` - Move more to the left
- `right: '5%'` - Move more to the right
- `top: '20%'` - Move down
- `size: 100` - Make bigger

### Remove Stickers
Delete any sticker objects you don't want:

```tsx
const floatingStickers = [
  { id: 1, src: '/sticker-1.png', ... },  // Keep
  // Remove: { id: 2, src: '/sticker-2.png', ... },
]
```

---

## 7. Change Footer Message

1. Open `src/sections/Footer.tsx`
2. Find line 23-24:
   ```tsx
   <p className="font-script text-lg text-hot-pink mb-2">
     Made with love for your special day
   </p>
   ```
3. Change to:
   ```tsx
   <p className="font-script text-lg text-hot-pink mb-2">
     With love for you 💕
   </p>
   ```

---

## 8. Change Fonts

### Available Fonts
The app uses two main fonts (already included):
- **Display Font** (titles): `Playfair Display`
- **Script Font** (decorative): `Dancing Script`

### Change Display Font
1. Open `tailwind.config.js`
2. Find line 58-61:
   ```js
   fontFamily: {
     display: ['"Playfair Display"', 'serif'],
     script: ['"Dancing Script"', 'cursive'],
   },
   ```

3. Replace with other Google Fonts:
   ```js
   display: ['"Montserrat"', 'sans-serif'],
   script: ['"Pacifico"', 'cursive'],
   ```

4. Then add the font import to `src/index.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Pacifico&display=swap');
   ```

---

## 9. Quick Reference: File Locations

| What to Change | File | Line |
|---|---|---|
| Birthday person's name | `src/sections/HeroSection.tsx` | 75 |
| Main title (HAPPY BIRTHDAY) | `src/sections/HeroSection.tsx` | 63 |
| Cake image | `src/sections/HeroSection.tsx` | 88 |
| Birthday notes/wishes | `src/sections/MessageSection.tsx` | 8 |
| Section title | `src/sections/MessageSection.tsx` | 53 |
| Colors (pinks, purples) | `tailwind.config.js` | 51-56 |
| Background gradient | `src/sections/MainPage.tsx` | 34 |
| Floating stickers | `src/sections/HeroSection.tsx` | 3-12 |
| Footer message | `src/sections/Footer.tsx` | 23 |

---

## 10. Save and Test Your Changes

After making changes:

```bash
# Test locally
npm run dev
# Visit http://localhost:3000

# Build for production
npm run build

# Preview the build
npm run preview
```

Your changes will appear immediately when you refresh the browser!

---

## Need More Help?

- **Images not showing?** Make sure they're in the `public/` folder
- **Colors not changing?** Save the file and refresh browser (Ctrl+F5)
- **App not building?** Check for typos in file paths
- **Want to add sections?** Copy the MessageSection component and modify it

Happy customizing! 🎉
