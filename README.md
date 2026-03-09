# 🎮 QuestLog

**"Goodreads, but for Games!"**

A beginner-friendly web app where gamers can discover, track, and rate their game collections.  
Built with **HTML**, **CSS**, and a sprinkle of **TypeScript**.

---

## 🎯 What Can Users Do?

| 🔍 **Discover** | 📚 **Collect** |
|-----------------|----------------|
| Browse popular games | Add games to library |
| Search by title | Mark as Playing / Completed / Want |
| View game details | Rate your favorites |

---

## 🛠️ Tech Stack

| Technology | Purpose | Priority |
|------------|---------|----------|
| **HTML5** | Page Structure | ⭐⭐⭐ Essential |
| **CSS3** | Styling & Layout | ⭐⭐⭐ Essential |
| **TypeScript** | Interactivity | ⭐⭐ Secondary |
| **RAWG API** | Game Data | ⭐ We'll guide you |

> 💡 **Pro Tip:** Focus **80% on HTML/CSS**, 20% on TypeScript. Make it look great first!

---

## 📂 Project Structure

```
QuestLog/
├── index.html              ← Main page
├── styles/
│   ├── main.css            ← Global styles & variables
│   ├── components.css      ← Cards, buttons, modals
│   └── layout.css          ← Grid & responsive design
├── scripts/
│   ├── api.ts              ← Fetch from RAWG
│   ├── storage.ts          ← localStorage logic
│   └── app.ts              ← Main app & events
└── assets/
    └── images/             ← Icons & images
```

---

## 👥 Team Roles

### 🎨 Person A: The Designer (UI/UX Focus)

**Your Mission:** Make the app look stunning!

**Your Files:**
- `index.html`
- `styles/main.css`
- `styles/components.css`
- `styles/layout.css`

**Key Skills to Learn:**
- HTML Structure
- CSS Flexbox & Grid
- Animations & Transitions
- Responsive Design

---

### ⚙️ Person B: The Developer (Logic Focus)

**Your Mission:** Make the app actually work!

**Your Files:**
- `scripts/api.ts`
- `scripts/storage.ts`
- `scripts/app.ts`

**Key Skills to Learn:**
- API Fetching
- localStorage
- Event Listeners
- DOM Manipulation

---

## 📅 7-Day Sprint Roadmap

### Day 1: Setup & Foundation

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| ✏️ Draw wireframes on paper | 🔧 Create folder structure |
| 📄 Set up `index.html` skeleton | 🔑 Get RAWG API key |
| 🎨 Choose colors & fonts | 📡 Test first API call |

**🎯 Milestone:** API returns game data in console!

---

### Day 2: First Visual + First Data

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| 🧭 Build Navigation Bar | 🔄 Loop through API data |
| 🖼️ Create card placeholder | 📝 Insert titles into HTML |
| 🎨 Set up CSS variables | 🤝 Sync on card structure |

**🎯 Milestone:** Styled navbar + game titles visible!

---

### Day 3: Game Cards Come Alive

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| 🃏 Style Game Cards | 🔍 Build search functionality |
| ✨ Add hover effects | 🎯 Filter by search query |
| 📱 CSS Grid layout | 🖱️ Add card click events |

**🎯 Milestone:** Beautiful cards + working search!

---

### Day 4: My Library Feature

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| 📚 Design Library section | 💾 Implement localStorage |
| 🔘 Style "Add" button | 📂 Load saved games |
| 🏷️ Create status badges | ➕ Add to Library logic |

**🎯 Milestone:** Games persist after refresh!

---

### Day 5: Game Details Modal

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| 🪟 Design modal overlay | 🎯 Track clicked game |
| 📋 Layout modal content | 📡 Fetch detailed info |
| ❌ Style close button | 🔗 Populate modal data |

**🎯 Milestone:** Click card → Beautiful popup!

---

### Day 6: Status & Ratings

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| ⭐ Design star rating | ⭐ Rating click logic |
| 🏷️ Style status dropdown | 💾 Save to localStorage |
| 🎨 Visual feedback | 🔄 Update UI on change |

**🎯 Milestone:** Rate games & set status!

---

### Day 7: Polish & Deploy 🚀

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| 📱 Test responsive | 🐛 Fix remaining bugs |
| ✨ Loading animations | 🚀 Deploy to Netlify |
| 📸 Screenshots | 📝 Update README |

**🎯 Milestone:** 🎉 LIVE WEBSITE!

---

## 🚀 Getting Started

### Prerequisites

- VS Code (code editor)
- Web browser (Chrome/Firefox)
- Live Server extension
- Free RAWG API key

### Quick Setup

1. Create project folder
2. Get API key from [rawg.io/apidocs](https://rawg.io/apidocs)
3. Create `index.html`
4. Open with Live Server

---

## 📚 Learning Resources

### For Person A (Design)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Google Fonts](https://fonts.google.com/)

### For Person B (Logic)
- [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [localStorage Guide](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [TypeScript for Beginners](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

### For Both
- [RAWG API Documentation](https://api.rawg.io/docs/)

---

## 💡 Tips for Success

1. **Communicate daily** — Share progress, ask for help
2. **Keep it simple** — Don't over-engineer
3. **Commit often** — Save your work to GitHub regularly
4. **Test early** — Don't wait until the end
5. **Have fun!** — It's a learning journey 🎮

---

## 🎨 Design Inspiration

**Suggested Color Palette (Dark Gaming Theme):**

| Element | Color | Hex |
|---------|-------|-----|
| Background | Dark Blue | `#0f0f23` |
| Card BG | Navy | `#1a1a2e` |
| Primary | Purple | `#8B5CF6` |
| Secondary | Green | `#10B981` |
| Accent | Cyan | `#06B6D4` |
| Text | Light Gray | `#E5E5E5` |

---

## ✅ Features Checklist

### MVP (Must Have)

- [ ] Display games from API
- [ ] Search for games
- [ ] Add to personal library
- [ ] Data persists (localStorage)
- [ ] Basic responsive design

### Stretch Goals (Nice to Have)

- [ ] Game detail modal
- [ ] Star ratings
- [ ] Status badges (Playing/Completed/Want)
- [ ] Filter by genre
- [ ] Smooth animations

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

**Good luck and happy coding! 🚀🎮**
