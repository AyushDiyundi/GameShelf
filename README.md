# 🎮 GameShelf

**"Goodreads, but for Games!"**

A modern multi-page web app where gamers can discover, track, review, and organize their game collections.  
Built with **HTML**, **CSS**, and **TypeScript**.

---

## 🌐 Pages Overview

| Page | URL | Description |
|------|-----|-------------|
| 🏠 **Home** | `index.html` | Discover games, browse by genre/platform, search & filter |
| 🎮 **My Games** | `mygames.html` | Personal library, wishlist, played games & reviews |
| ℹ️ **About** | `about.html` | About GameShelf, our mission & team |
| 📬 **Contact** | `contact.html` | Get in touch, feedback & support |

---

## 🎯 Features by Page

### 🏠 Home (`index.html`)
- **Hero Section** — Welcome banner with quick search
- **Trending Games** — Top rated games this week
- **Browse by Genre** — Action, RPG, Strategy, Adventure, etc.
- **Browse by Platform** — PC, PlayStation, Xbox, Nintendo, Mobile
- **Advanced Filters** — Filter by rating, release year, sort options
- **Search** — Find any game from 500,000+ titles
- **Game Cards** — Preview with ratings, genres & quick add to library
- **Pagination** — Navigate through results
- **Featured Collections** — Curated game lists

### 🎮 My Games (`mygames.html`)
- **Dashboard Stats** — Total games, completed, hours played, reviews count
- **Game Library** — All games you've added
- **Status Tracking** — Playing / Completed / Dropped / Backlog
- **Wishlist** — Games you want to play
- **Star Ratings** — Rate games 1-5 stars
- **Your Reviews** — Personal written reviews
- **Filter Tabs** — View by status category
- **Grid/List View** — Toggle display mode
- **Import/Export** — Backup your collection

### ℹ️ About (`about.html`)
- **Our Mission** — Why we built GameShelf
- **Features Overview** — What makes us different
- **How It Works** — Simple 3-step guide
- **Tech Stack** — Technologies powering the app
- **Team Section** — Meet the creators
- **Statistics** — Platform numbers & achievements
- **FAQ** — Frequently asked questions

### 📬 Contact (`contact.html`)
- **Contact Form** — Name, email, subject, message
- **Email Support** — Direct email link
- **Social Links** — GitHub, Twitter, Discord
- **FAQ Link** — Common questions
- **Response Time** — Expected reply timeframe
- **Bug Reports** — How to report issues
- **Feature Requests** — Suggest new features
- **Office Location** — Physical address (if applicable)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure & semantics |
| **CSS3** | Styling, animations & responsive design |
| **TypeScript** | Interactivity & API communication |
| **RAWG API** | Game data (500,000+ games) |
| **localStorage** | Persist user data locally |

---

## 📂 Project Structure

```
GameShelf/
├── index.html              ← Home (discover & explore games)
├── mygames.html            ← My Games (library & reviews)
├── about.html              ← About (mission & team)
├── contact.html            ← Contact (support & feedback)
├── styles/
│   ├── main.css            ← Global styles & variables
│   ├── components.css      ← Cards, buttons, modals, badges
│   ├── layout.css          ← Grid, flexbox & responsive
│   ├── home.css            ← Home page specific styles
│   ├── mygames.css         ← My Games specific styles
│   ├── about.css           ← About page specific styles
│   └── contact.css         ← Contact page specific styles
├── scripts/
│   ├── api.ts              ← RAWG API communication
│   ├── storage.ts          ← localStorage logic
│   ├── app.ts              ← Shared app logic & navigation
│   ├── home.ts             ← Home page functionality
│   ├── mygames.ts          ← My Games functionality
│   └── contact.ts          ← Contact form handling
├── assets/
│   └── images/             ← Icons, logos & images
├── .env                    ← API key (not committed)
├── .gitignore              ← Ignored files
└── package.json            ← Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [VS Code](https://code.visualstudio.com/)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Free [RAWG API Key](https://rawg.io/apidocs)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AyushDiyundi/GameShelf.git
   cd GameShelf
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Key**
   
   Create a `.env` file in the root directory:
   ```env
   RAWG_API_KEY=your_api_key_here
   ```

4. **Run the app**
   
   Open `index.html` with Live Server in VS Code

---

## 📋 Page Specifications

### 🏠 Home Layout

```
┌─────────────────────────────────────────────────────┐
│  🎮 GameShelf    [Search...]    🏠 📚 ℹ️ 📬        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │     Welcome to GameShelf                     │   │
│  │     Discover your next favorite game         │   │
│  │     [    Search games...    ] [🔍]          │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  � Filters                                         │
│  ┌─────────────────────────────────────────────┐   │
│  │ Genre: [All▼] Platform: [All▼] Rating: [▼] │   │
│  │ Year: [All▼]  Sort: [Popularity▼] [Apply]  │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  🔥 Trending This Week                              │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐     │
│  │ Game │ │ Game │ │ Game │ │ Game │ │ Game │     │
│  │ +Add │ │ +Add │ │ +Add │ │ +Add │ │ +Add │     │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘     │
│                                                     │
│  🎮 Browse All Games                                │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐     │
│  │ Game │ │ Game │ │ Game │ │ Game │ │ Game │     │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘     │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐     │
│  │ Game │ │ Game │ │ Game │ │ Game │ │ Game │     │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘     │
│                                                     │
│  [← Prev]  Page 1 of 50  [Next →]                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 🎮 My Games Layout

```
┌─────────────────────────────────────────────────────┐
│  🎮 GameShelf    [Search...]    🏠 📚 ℹ️ �        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  📊 Your Stats                                      │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│  │ 47     │ │ 23     │ │ 156h   │ │ 12     │       │
│  │ Total  │ │ Done   │ │ Played │ │ Reviews│       │
│  └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                     │
│  [All] [Playing] [Completed] [Wishlist] [Dropped]  │
│                                                     │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐              │
│  │ Game │ │ Game │ │ Game │ │ Game │              │
│  │ ⭐⭐⭐│ │ ⭐⭐⭐│ │ ⭐⭐  │ │ ⭐⭐⭐│              │
│  └──────┘ └──────┘ └──────┘ └──────┘              │
│                                                     │
│  ✍️ Your Reviews                                    │
│  ┌─────────────────────────────────────────────┐   │
│  │ Game Name          ⭐⭐⭐⭐☆    Mar 9, 2026  │   │
│  │ "Amazing game with great story..."          │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### ℹ️ About Layout

```
┌─────────────────────────────────────────────────────┐
│  🎮 GameShelf    [Search...]    🏠 📚 ℹ️ �        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │           About GameShelf                    │   │
│  │     Your Personal Gaming Companion           │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  🎯 Our Mission                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ We believe every gamer deserves a place to  │   │
│  │ track, discover, and share their gaming     │   │
│  │ journey. GameShelf is built by gamers,      │   │
│  │ for gamers.                                 │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  ✨ Features                                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │ 🔍       │ │ 📚       │ │ ⭐       │           │
│  │ Discover │ │ Organize │ │ Review   │           │
│  │ 500K+    │ │ Your     │ │ & Rate   │           │
│  │ Games    │ │ Library  │ │ Games    │           │
│  └──────────┘ └──────────┘ └──────────┘           │
│                                                     │
│  👥 Meet the Team                                   │
│  ┌──────────────────────────────────────────┐      │
│  │  [Photo]  Ayush Diyundi - Creator        │      │
│  │           Full Stack Developer           │      │
│  └──────────────────────────────────────────┘      │
│                                                     │
│  ❓ FAQ                                             │
│  ┌─────────────────────────────────────────────┐   │
│  │ Q: Is GameShelf free?                       │   │
│  │ A: Yes! GameShelf is completely free.       │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 📬 Contact Layout

```
┌─────────────────────────────────────────────────────┐
│  🎮 GameShelf    [Search...]    🏠 📚 ℹ️ 📬        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │            Get in Touch                      │   │
│  │     We'd love to hear from you!              │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  ┌─────────────────┐  ┌─────────────────────┐      │
│  │                 │  │ 📧 Email Us          │      │
│  │  Contact Form   │  │ support@gameshelf   │      │
│  │                 │  │                     │      │
│  │  Name: [____]   │  │ 🐦 Twitter          │      │
│  │  Email: [____]  │  │ @GameShelfApp       │      │
│  │  Subject: [__]  │  │                     │      │
│  │  Message:       │  │ 💬 Discord          │      │
│  │  [___________]  │  │ discord.gg/gameshelf│      │
│  │  [___________]  │  │                     │      │
│  │  [___________]  │  │ 🐙 GitHub           │      │
│  │                 │  │ github.com/GameShelf│      │
│  │  [Send Message] │  │                     │      │
│  │                 │  └─────────────────────┘      │
│  └─────────────────┘                               │
│                                                     │
│  ⏰ Response Time: We typically respond within     │
│     24-48 hours on business days.                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 🎨 Design System

### Color Palette (Dark Gaming Theme)

| Element | Color | Hex Code |
|---------|-------|----------|
| Background | Dark Blue | `#0f0f23` |
| Surface | Navy | `#1a1a2e` |
| Card | Dark Gray | `#16213e` |
| Primary | Purple | `#8B5CF6` |
| Secondary | Emerald | `#10B981` |
| Accent | Cyan | `#06B6D4` |
| Warning | Amber | `#F59E0B` |
| Error | Red | `#EF4444` |
| Text Primary | White | `#FFFFFF` |
| Text Secondary | Gray | `#9CA3AF` |

### Status Badge Colors

| Status | Color | Use Case |
|--------|-------|----------|
| 🟢 Playing | Green | Currently playing |
| 🔵 Completed | Blue | Finished the game |
| 🟡 Wishlist | Yellow | Want to play |
| 🔴 Dropped | Red | Stopped playing |
| ⚫ Backlog | Gray | In the queue |

---

## 📡 API Reference

### RAWG API Endpoints Used

| Endpoint | Purpose |
|----------|---------|
| `GET /games` | List games with filters |
| `GET /games/{id}` | Game details |
| `GET /genres` | List all genres |
| `GET /platforms` | List all platforms |
| `GET /games/{id}/screenshots` | Game screenshots |

### Filter Parameters

```typescript
// Genre IDs
const GENRES = {
  action: 4,
  rpg: 5,
  strategy: 10,
  shooter: 2,
  adventure: 3,
  puzzle: 7,
  racing: 1,
  sports: 15
};

// Platform IDs  
const PLATFORMS = {
  pc: 4,
  playstation5: 187,
  xbox_series: 186,
  nintendo_switch: 7,
  ios: 3,
  android: 21
};
```

---

## 💾 Local Storage Schema

```typescript
interface UserData {
  library: LibraryGame[];
  reviews: Review[];
  settings: UserSettings;
}

interface LibraryGame {
  id: number;
  name: string;
  image: string;
  status: 'playing' | 'completed' | 'wishlist' | 'dropped' | 'backlog';
  rating: number; // 1-5 stars
  dateAdded: string;
  hoursPlayed?: number;
}

interface Review {
  gameId: number;
  rating: number;
  text: string;
  dateCreated: string;
  dateModified?: string;
}

interface UserSettings {
  theme: 'dark' | 'light';
  defaultView: 'grid' | 'list';
}
```

---

## ✅ Features Checklist

### MVP (Must Have)

- [ ] **Home**
  - [ ] Hero section with search
  - [ ] Trending games carousel
  - [ ] Genre & platform filters
  - [ ] Rating & year filters
  - [ ] Sort options
  - [ ] Game cards with quick add
  - [ ] Pagination
  - [ ] Responsive grid
  
- [ ] **My Games**
  - [ ] Dashboard statistics
  - [ ] Add games to library
  - [ ] Set game status
  - [ ] Star rating system
  - [ ] Filter by status tabs
  - [ ] Write reviews
  - [ ] Grid/List view toggle
  
- [ ] **About**
  - [ ] Mission statement
  - [ ] Features showcase
  - [ ] Team section
  - [ ] FAQ accordion
  - [ ] Tech stack info
  
- [ ] **Contact**
  - [ ] Contact form
  - [ ] Form validation
  - [ ] Social media links
  - [ ] Email link
  - [ ] Response time info

- [ ] **Global**
  - [ ] Responsive navigation
  - [ ] Consistent design
  - [ ] Data persistence
  - [ ] Game detail modal
  - [ ] Loading states
  - [ ] Error handling

### Stretch Goals (Nice to Have)

- [ ] User authentication
- [ ] Social features (follow users)
- [ ] Game recommendations
- [ ] Import from Steam/PSN
- [ ] Dark/Light theme toggle
- [ ] PWA support
- [ ] Achievements system
- [ ] Email notifications
- [ ] Newsletter signup

---

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📚 Resources

- [RAWG API Documentation](https://api.rawg.io/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [RAWG](https://rawg.io/) for the amazing game database API
- Gaming community for inspiration

---

**Happy Gaming! 🎮🚀**
