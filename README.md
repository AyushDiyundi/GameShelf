# 🎮 GameShelf# 🎮 GameShelf# 🎮 GameShelf# 🎮 GameShelf# 🎮 GameShelf



**"Goodreads, but for Games!"**



A web app where gamers can discover, track, rate, and review their favorite games.**"Goodreads, but for Games!"**



---



## 🌐 Live DemoA web app where gamers can discover, track, rate, and review their favorite games.**"Goodreads, but for Games!"**



🔗 **[gameshelf.vercel.app](https://gameshelf.vercel.app)**



Or open `index.html` locally in your browser.---



---



## ✨ Features## 🌐 Live DemoA simple web app where gamers can discover, track, and review their favorite games.  **"Goodreads, but for Games!"****"Goodreads, but for Games!"**



### 🏠 Home Page

- **Browse Games** — View popular games from the RAWG database

- **Search** — Find any game by typing and pressing EnterOpen `index.html` in your browser to start using GameShelf!Built with **HTML**, **CSS**, and **JavaScript**.

- **Filter by Genre** — Filter games by Action, RPG, Strategy, Puzzle

- **Add to Library** — Save games to your personal collection



### 🎮 My Games Page---

- **Your Library** — View all saved games

- **Star Ratings** — Rate games from 1-5 stars

- **Write Reviews** — Add personal reviews to any game

- **Stats Dashboard** — See total games, rated games, and reviews count## ✨ Features---

- **Remove Games** — Delete games from your library



### ℹ️ About Page

- Learn about GameShelf and its mission### 🏠 Home PageA simple web app where gamers can discover, track, and review their favorite games.  A modern multi-page web app where gamers can discover, track, review, and organize their game collections.  



### 📬 Contact Page- **Browse Games** — View popular games from the RAWG database

- Get in touch via email or GitHub

- **Search** — Find any game by typing and pressing Enter## 🌐 Pages

---

- **Filter by Genre** — Filter games by Action, RPG, Strategy, Puzzle

## 🛠️ Tech Stack

- **Add to Library** — Save games to your personal collectionBuilt with **HTML**, **CSS**, and **JavaScript**.Built with **HTML**, **CSS**, and **TypeScript**.

| Technology | Purpose |

|------------|---------|

| **HTML5** | Page structure |

| **CSS3** | Styling & responsive design |### 🎮 My Games Page| Page | File | Description |

| **JavaScript** | Interactivity & logic |

| **RAWG API** | Game data (500,000+ games) |- **Your Library** — View all saved games

| **localStorage** | Save user data locally |

- **Star Ratings** — Rate games from 1-5 stars|------|------|-------------|

---

- **Write Reviews** — Add personal reviews to any game

## 📂 Project Structure

- **Stats Dashboard** — See total games, rated games, and reviews count| 🏠 **Home** | `index.html` | Browse games, search & filter |

```

GameShelf/- **Remove Games** — Delete games from your library

├── index.html              ← Home page (browse & search games)

├── mygames.html            ← My Games (library & reviews)| 🎮 **My Games** | `mygames.html` | Your saved games & reviews |------

├── about.html              ← About page

├── contact.html            ← Contact page### ℹ️ About Page

│

├── js/- Learn about GameShelf and its mission| ℹ️ **About** | `about.html` | About the project |

│   ├── api.js              ← API functions (fetch games from RAWG)

│   ├── storage.js          ← localStorage functions (save/load data)

│   └── app.js              ← Main app (display & event handlers)

│### 📬 Contact Page| 📬 **Contact** | `contact.html` | Contact us |

├── styles/

│   ├── main.css            ← Global styles & CSS variables- Get in touch via email or GitHub

│   ├── layout.css          ← Grid & responsive layout

│   └── components.css      ← Cards, buttons, modals

│

└── README.md               ← This file---

```

---## 🌐 Pages## 🌐 Pages Overview

---

## 🛠️ Tech Stack

## 📁 JavaScript Files Explained



### `js/api.js`

Handles all communication with the RAWG API.| Technology | Purpose |



| Function | Description ||------------|---------|## ✨ Features

|----------|-------------|

| `searchGames(query)` | Search games by name || **HTML5** | Page structure |

| `getPopularGames()` | Get top-rated games |

| `filterByGenre(genre)` | Filter games by genre || **CSS3** | Styling & responsive design |



### `js/storage.js`| **JavaScript** | Interactivity & logic |

Handles saving and loading data from localStorage.

| **RAWG API** | Game data (500,000+ games) |- 🔍 **Search** — Find games from RAWG API| Page | File | Description || Page | URL | Description |

| Function | Description |

|----------|-------------|| **localStorage** | Save user data locally |

| `getLibrary()` | Get saved games |

| `saveGame(id, name, image)` | Add game to library |- 🎯 **Filter** — Filter by genre

| `removeGame(gameId)` | Remove game from library |

| `rateGame(gameId, rating)` | Rate a game (1-5 stars) |---

| `getReviews()` | Get all reviews |

| `saveReview(...)` | Save a review |- ⭐ **Ratings** — Rate games 1-5 stars|------|------|-------------||------|-----|-------------|

| `deleteReview(gameId)` | Delete a review |

## 📂 Project Structure

### `js/app.js`

Handles displaying content and user interactions.- 📝 **Reviews** — Write reviews for games



| Function | Description |```

|----------|-------------|

| `displayGames(games, container)` | Show game cards |GameShelf/- 💾 **Save Games** — Add games to your library| 🏠 **Home** | `index.html` | Browse games, search & filter || 🏠 **Home** | `index.html` | Discover games, browse by genre/platform, search & filter |

| `displayLibrary(container)` | Show saved games |

| `displayReviews(container)` | Show reviews |├── index.html              ← Home page (browse & search games)

| `updateStats()` | Update stats dashboard |

| `openReviewModal(...)` | Open review popup |├── mygames.html            ← My Games (library & reviews)- 📱 **Responsive** — Works on mobile & desktop

| `loadGames()` | Load games on page start |

├── about.html              ← About page

---

├── contact.html            ← Contact page| 🎮 **My Games** | `mygames.html` | Your saved games & reviews || 🎮 **My Games** | `mygames.html` | Personal library, wishlist, played games & reviews |

## 🎨 CSS Files Explained

│

| File | Purpose |

|------|---------|├── js/---

| `main.css` | CSS variables, colors, fonts, global resets |

| `layout.css` | Page layout, grid system, responsive breakpoints |│   ├── api.js              ← API functions (fetch games from RAWG)

| `components.css` | Game cards, buttons, modals, forms, badges |

│   ├── storage.js          ← localStorage functions (save/load data)| ℹ️ **About** | `about.html` | About the project || ℹ️ **About** | `about.html` | About GameShelf, our mission & team |

---

│   └── app.js              ← Main app (display & event handlers)

## 🚀 Getting Started

│## 📂 Project Structure

1. **Clone the repository**

   ```bash├── styles/

   git clone https://github.com/AyushDiyundi/GameShelf.git

   ```│   ├── main.css            ← Global styles & CSS variables| 📬 **Contact** | `contact.html` | Contact us || 📬 **Contact** | `contact.html` | Get in touch, feedback & support |



2. **Open in browser**│   ├── layout.css          ← Grid & responsive layout

   ```

   Open index.html in your browser│   └── components.css      ← Cards, buttons, modals```

   ```

│

3. **Start exploring!**

   - Search for games└── README.md               ← This fileGameShelf/

   - Add games to your library

   - Rate and review your favorites```



> 💡 No build tools or server required — just open and use!├── index.html          ← Home page



------



## 🔑 API Information├── mygames.html        ← My Games page------



This project uses the [RAWG Video Games Database API](https://rawg.io/apidocs).## 📁 JavaScript Files Explained



- **500,000+ games** in the database├── about.html          ← About page

- **Free tier** available

- Data includes: titles, images, ratings, genres, platforms### `js/api.js`



---Handles all communication with the RAWG API.├── contact.html        ← Contact page



## 📱 Responsive Design



GameShelf works on:| Function | Description |├── styles/

- 🖥️ Desktop

- 💻 Laptop|----------|-------------|

- 📱 Tablet

- 📱 Mobile| `searchGames(query)` | Search games by name |│   ├── main.css        ← Global styles & variables## ✨ Features## 🎯 Features by Page



---| `getPopularGames()` | Get top-rated games |



## 📬 Contact| `filterByGenre(genre)` | Filter games by genre |│   ├── layout.css      ← Grid & responsive design



**GitHub:** [github.com/AyushDiyundi](https://github.com/AyushDiyundi)



---### `js/storage.js`│   └── components.css  ← Cards, buttons, etc.



Made with ❤️ for Web Engineering 1Handles saving and loading data from localStorage.


├── app.js              ← ALL JavaScript (single file)

| Function | Description |

|----------|-------------|└── README.md           ← This file- 🔍 **Search** — Find games from RAWG API### 🏠 Home (`index.html`)

| `getLibrary()` | Get saved games |

| `saveGame(id, name, image)` | Add game to library |```

| `removeGame(gameId)` | Remove game from library |

| `rateGame(gameId, rating)` | Rate a game (1-5 stars) |- 🎯 **Filter** — Filter by genre- **Hero Section** — Welcome banner with quick search

| `getReviews()` | Get all reviews |

| `saveReview(...)` | Save a review |---

| `deleteReview(gameId)` | Delete a review |

- ⭐ **Ratings** — Rate games 1-5 stars- **Trending Games** — Top rated games this week

### `js/app.js`

Handles displaying content and user interactions.## 🛠️ Tech Stack



| Function | Description |- 📝 **Reviews** — Write reviews for games- **Browse by Genre** — Action, RPG, Strategy, Adventure, etc.

|----------|-------------|

| `displayGames(games, container)` | Show game cards || Technology | Purpose |

| `displayLibrary(container)` | Show saved games |

| `displayReviews(container)` | Show reviews ||------------|---------|- 💾 **Save Games** — Add games to your library- **Browse by Platform** — PC, PlayStation, Xbox, Nintendo, Mobile

| `updateStats()` | Update stats dashboard |

| `openReviewModal(...)` | Open review popup || HTML5 | Page structure |

| `loadGames()` | Load games on page start |

| CSS3 | Styling |- 📱 **Responsive** — Works on mobile & desktop- **Advanced Filters** — Filter by rating, release year, sort options

---

| JavaScript | Interactivity |

## 🎨 CSS Files Explained

| RAWG API | Game data |- **Search** — Find any game from 500,000+ titles

| File | Purpose |

|------|---------|| localStorage | Save user data |

| `main.css` | CSS variables, colors, fonts, global resets |

| `layout.css` | Page layout, grid system, responsive breakpoints |---- **Game Cards** — Preview with ratings, genres & quick add to library

| `components.css` | Game cards, buttons, modals, forms, badges |

---

---

- **Pagination** — Navigate through results

## 🚀 Getting Started

## 👥 Team & Task Division

1. **Clone the repository**

   ```bash## 📂 Project Structure (Simplified)- **Featured Collections** — Curated game lists

   git clone https://github.com/AyushDiyundi/GameShelf.git

   ```### 👤 Person A — Designer (HTML & CSS)



2. **Open in browser**

   ```

   Open index.html in your browser**Creates all 4 HTML pages and the CSS files.**

   ```

```### 🎮 My Games (`mygames.html`)

3. **Start exploring!**

   - Search for games| Task | File |

   - Add games to your library

   - Rate and review your favorites|------|------|GameShelf/- **Dashboard Stats** — Total games, completed, hours played, reviews count



> 💡 No build tools or server required — just open and use!| 1 | `index.html` — Home page with search, filters, game cards |



---| 2 | `mygames.html` — Library, stats, reviews |├── index.html          ← Home page- **Game Library** — All games you've added



## 🔑 API Information| 3 | `about.html` — About the project |



This project uses the [RAWG Video Games Database API](https://rawg.io/apidocs).| 4 | `contact.html` — Contact page |├── mygames.html        ← My Games page- **Status Tracking** — Playing / Completed / Dropped / Backlog



- **500,000+ games** in the database| 5 | `styles/` — All CSS styling |

- **Free tier** available

- Data includes: titles, images, ratings, genres, platforms├── about.html          ← About page- **Wishlist** — Games you want to play



---**HTML Element IDs for JavaScript:**



## 📱 Responsive Design├── contact.html        ← Contact page- **Star Ratings** — Rate games 1-5 stars



GameShelf works on:```html

- 🖥️ Desktop

- 💻 Laptop<!-- index.html -->├── styles.css          ← ALL styles (single file)- **Your Reviews** — Personal written reviews

- 📱 Tablet

- 📱 Mobile#searchInput     — Search input field



---#genreFilter     — Genre dropdown├── app.js              ← ALL JavaScript (single file)- **Filter Tabs** — View by status category



## 📬 Contact#gamesContainer  — Where game cards appear



**GitHub:** [github.com/AyushDiyundi](https://github.com/AyushDiyundi)#loading         — Loading indicator└── README.md           ← This file- **Grid/List View** — Toggle display mode



---



Made with ❤️ for Web Engineering 1<!-- mygames.html -->```- **Import/Export** — Backup your collection


#libraryContainer  — Saved games

#reviewsContainer  — User reviews

#totalGames        — Stat counter

#ratedGames        — Stat counter---### ℹ️ About (`about.html`)

#totalReviews      — Stat counter

```- **Our Mission** — Why we built GameShelf



---## 🛠️ Tech Stack- **Features Overview** — What makes us different



### 👤 Person B — Developer (JavaScript)- **How It Works** — Simple 3-step guide



**Creates single `app.js` file with all functionality.**| Technology | Purpose |- **Tech Stack** — Technologies powering the app



| Function | Purpose ||------------|---------|- **Team Section** — Meet the creators

|----------|---------|

| `searchGames()` | Fetch games from RAWG API || HTML5 | Page structure |- **Statistics** — Platform numbers & achievements

| `displayGames()` | Show game cards on page |

| `filterByGenre()` | Filter games by genre || CSS3 | Styling |- **FAQ** — Frequently asked questions

| `saveGame()` | Save game to localStorage |

| `loadLibrary()` | Load saved games || JavaScript | Interactivity |

| `rateGame()` | Add star rating (1-5) |

| `saveReview()` | Save text review || RAWG API | Game data |### 📬 Contact (`contact.html`)

| `displayReviews()` | Show all reviews |

| localStorage | Save user data |- **Email Link** — Opens user's email client to send message

---

- **Contact Email** — Ayubackup07@gmail.com

## 🔑 API Setup

---- **Social Links** — GitHub, Twitter, Discord

Using [RAWG API](https://rawg.io/apidocs) for game data.

- **FAQ Link** — Common questions

```javascript

const API_KEY = "your-api-key-here";## 👥 Team & Task Division- **Response Time** — Expected reply timeframe

const API_URL = "https://api.rawg.io/api";

```



---### 👤 Person A — Designer (HTML & CSS)---



## 📅 7-Day Timeline



| Day | Person A (Designer) | Person B (Developer) |**Creates all 4 HTML pages and the single CSS file.**## 🛠️ Tech Stack

|-----|---------------------|----------------------|

| 1 | Set up HTML structure | Get API key, test API |

| 2 | Build index.html | searchGames(), displayGames() |

| 3 | Build mygames.html | filterByGenre() || Task | File | Description || Technology | Purpose |

| 4 | Style game cards | saveGame(), loadLibrary() |

| 5 | Style stats & reviews | rateGame(), saveReview() ||------|------|-------------||------------|---------|

| 6 | Responsive design | displayReviews(), testing |

| 7 | Final polish | Integration & fixes || 1 | `index.html` | Home page structure (search bar, filter dropdown, game cards container) || **HTML5** | Page structure & semantics |



---| 2 | `mygames.html` | My Games page (stats, library cards, reviews section) || **CSS3** | Styling, animations & responsive design |



## 🚀 Quick Start| 3 | `about.html` | About page (mission, features, team info) || **TypeScript** | Interactivity & API communication |



1. Clone the repo| 4 | `contact.html` | Contact page (email link, social links) || **RAWG API** | Game data (500,000+ games) |

2. Open `index.html` in browser

3. That's it! No build tools needed.| 5 | `styles.css` | All CSS styling for all pages || **localStorage** | Persist user data locally |



---



## 📬 Contact**HTML Elements Person A Creates:**---



**Email:** Ayubackup07@gmail.com



---```html## 📂 Project Structure



Made with ❤️ for Web Engineering 1<!-- index.html needs: -->


- Navigation bar (links to all pages)```

- Search input (#searchInput)GameShelf/

- Genre filter dropdown (#genreFilter)├── index.html              ← Home (discover & explore games)

- Games container (#gamesContainer)├── mygames.html            ← My Games (library & reviews)

- Loading indicator (#loading)├── about.html              ← About (mission & team)

├── contact.html            ← Contact (support & feedback)

<!-- mygames.html needs: -->├── styles/

- Navigation bar│   ├── main.css            ← Global styles & variables

- Stats section (total, playing, completed, reviews)│   ├── components.css      ← Cards, buttons, modals, badges

- Library container (#libraryContainer)│   ├── layout.css          ← Grid, flexbox & responsive

- Reviews container (#reviewsContainer)│   ├── home.css            ← Home page specific styles

│   ├── mygames.css         ← My Games specific styles

<!-- about.html needs: -->│   ├── about.css           ← About page specific styles

- Navigation bar│   └── contact.css         ← Contact page specific styles

- Mission section├── scripts/

- Features list│   ├── api.ts              ← RAWG API communication

- Team section│   ├── storage.ts          ← localStorage logic

│   ├── app.ts              ← Shared app logic & navigation

<!-- contact.html needs: -->│   ├── home.ts             ← Home page functionality

- Navigation bar│   └── mygames.ts          ← My Games functionality

- Email link (mailto:Ayubackup07@gmail.com)├── assets/

- Social links│   └── images/             ← Icons, logos & images

```├── .env                    ← API key (not committed)

├── .gitignore              ← Ignored files

---└── package.json            ← Dependencies

```

### 👤 Person B — Developer (JavaScript)

---

**Creates the single JavaScript file with all functionality.**

## 🚀 Getting Started

| Task | Function | Description |

|------|----------|-------------|### Prerequisites

| 1 | `searchGames()` | Fetch games from RAWG API |

| 2 | `displayGames()` | Show game cards on home page |- [Node.js](https://nodejs.org/) (v16+)

| 3 | `filterByGenre()` | Filter games by selected genre |- [VS Code](https://code.visualstudio.com/)

| 4 | `saveGame()` | Save a game to localStorage |- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

| 5 | `loadLibrary()` | Load saved games on My Games page |- Free [RAWG API Key](https://rawg.io/apidocs)

| 6 | `rateGame()` | Add/update star rating |

| 7 | `saveReview()` | Save a text review |### Installation

| 8 | `displayReviews()` | Show all reviews |

1. **Clone the repository**

---   ```bash

   git clone https://github.com/AyushDiyundi/GameShelf.git

## 📅 Simple Timeline (7 Days)   cd GameShelf

   ```

| Day | Person A (Designer) | Person B (Developer) |

|-----|---------------------|----------------------|2. **Install dependencies**

| 1 | Create `index.html` structure | Set up `app.js`, API functions |   ```bash

| 2 | Create `mygames.html` structure | `searchGames()`, `displayGames()` |   npm install

| 3 | Create `about.html` & `contact.html` | `filterByGenre()`, `saveGame()` |   ```

| 4 | Start `styles.css` - layout & colors | `loadLibrary()`, `rateGame()` |

| 5 | `styles.css` - cards & buttons | `saveReview()`, `displayReviews()` |3. **Configure API Key**

| 6 | `styles.css` - responsive design | Testing & bug fixes |   

| 7 | Final polish & testing | Final polish & testing |   Create a `.env` file in the root directory:

   ```env

---   RAWG_API_KEY=your_api_key_here

   ```

## 🚀 Getting Started

4. **Run the app**

1. **Clone the repo**   

   ```bash   Open `index.html` with Live Server in VS Code

   git clone https://github.com/AyushDiyundi/GameShelf.git

   cd GameShelf---

   ```

## 📋 Page Specifications

2. **Open in browser**

   - Open `index.html` with Live Server (VS Code)### 🏠 Home Layout

   - Or just double-click `index.html`

```

3. **API Key**┌─────────────────────────────────────────────────────┐

   - The RAWG API key is already in `app.js`│  🎮 GameShelf    [Search...]    🏠 📚 ℹ️ 📬        │

   - Free API: https://rawg.io/apidocs├─────────────────────────────────────────────────────┤

│                                                     │

---│  ┌─────────────────────────────────────────────┐   │

│  │     Welcome to GameShelf                     │   │

## 📝 How It Works│  │     Discover your next favorite game         │   │

│  │     [    Search games...    ] [🔍]          │   │

### Home Page Flow:│  └─────────────────────────────────────────────┘   │

1. User types in search box → `searchGames()` calls API│                                                     │

2. Results returned → `displayGames()` creates cards│  � Filters                                         │

3. User clicks genre filter → `filterByGenre()` updates results│  ┌─────────────────────────────────────────────┐   │

4. User clicks "Add" on a card → `saveGame()` stores in localStorage│  │ Genre: [All▼] Platform: [All▼] Rating: [▼] │   │

│  │ Year: [All▼]  Sort: [Popularity▼] [Apply]  │   │

### My Games Page Flow:│  └─────────────────────────────────────────────┘   │

1. Page loads → `loadLibrary()` reads from localStorage│                                                     │

2. User clicks stars → `rateGame()` updates rating│  🔥 Trending This Week                              │

3. User writes review → `saveReview()` stores review│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐     │

4. Reviews displayed → `displayReviews()` shows all│  │ Game │ │ Game │ │ Game │ │ Game │ │ Game │     │

│  │ +Add │ │ +Add │ │ +Add │ │ +Add │ │ +Add │     │

---│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘     │

│                                                     │

## 🎨 CSS Classes to Style (For Person A)│  🎮 Browse All Games                                │

│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐     │

```css│  │ Game │ │ Game │ │ Game │ │ Game │ │ Game │     │

/* Layout */│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘     │

.navbar { }│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐     │

.container { }│  │ Game │ │ Game │ │ Game │ │ Game │ │ Game │     │

│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘     │

/* Cards */│                                                     │

.game-card { }│  [← Prev]  Page 1 of 50  [Next →]                  │

.game-card img { }│                                                     │

.game-card h3 { }└─────────────────────────────────────────────────────┘

.game-card .rating { }```

.game-card .btn { }

### 🎮 My Games Layout

/* Forms */

.search-box { }```

.filter-dropdown { }┌─────────────────────────────────────────────────────┐

│  🎮 GameShelf    [Search...]    🏠 📚 ℹ️ �        │

/* My Games */├─────────────────────────────────────────────────────┤

.stats-container { }│                                                     │

.stat-box { }│  📊 Your Stats                                      │

.library-grid { }│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │

.review-card { }│  │ 47     │ │ 23     │ │ 156h   │ │ 12     │       │

│  │ Total  │ │ Done   │ │ Played │ │ Reviews│       │

/* Stars */│  └────────┘ └────────┘ └────────┘ └────────┘       │

.star { }│                                                     │

.star.active { }│  [All] [Playing] [Completed] [Wishlist] [Dropped]  │

│                                                     │

/* Buttons */│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐              │

.btn { }│  │ Game │ │ Game │ │ Game │ │ Game │              │

.btn-primary { }│  │ ⭐⭐⭐│ │ ⭐⭐⭐│ │ ⭐⭐  │ │ ⭐⭐⭐│              │

.btn-danger { }│  └──────┘ └──────┘ └──────┘ └──────┘              │

```│                                                     │

│  ✍️ Your Reviews                                    │

---│  ┌─────────────────────────────────────────────┐   │

│  │ Game Name          ⭐⭐⭐⭐☆    Mar 9, 2026  │   │

## 📧 Contact│  │ "Amazing game with great story..."          │   │

│  └─────────────────────────────────────────────┘   │

- **Email:** Ayubackup07@gmail.com│                                                     │

- **GitHub:** [AyushDiyundi](https://github.com/AyushDiyundi)└─────────────────────────────────────────────────────┘

```

---

### ℹ️ About Layout

## 📄 License

```

This project is for educational purposes.┌─────────────────────────────────────────────────────┐

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
│  ┌─────────────────────────────────────────────┐   │
│  │                                             │   │
│  │  📧 Email Us                                │   │
│  │  ┌───────────────────────────────────────┐ │   │
│  │  │  Ayubackup07@gmail.com                │ │   │
│  │  │  [Click to Send Email]                │ │   │
│  │  └───────────────────────────────────────┘ │   │
│  │                                             │   │
│  │  🔗 Connect With Us                         │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐       │   │
│  │  │ 🐙      │ │ 🐦      │ │ 💬      │       │   │
│  │  │ GitHub  │ │ Twitter │ │ Discord │       │   │
│  │  └─────────┘ └─────────┘ └─────────┘       │   │
│  │                                             │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  ⏰ Response Time: We typically respond within     │
│     24-48 hours.                                   │
│                                                     │
│  ❓ Check our FAQ on the About page for quick     │
│     answers to common questions!                   │
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

## � Team Roles

### 🎨 Person A: The Designer (UI/UX Focus)

**Your Mission:** Make the app look stunning and feel intuitive!

**Your Pages:**
- `index.html` (Home page structure)
- `about.html` (About page)
- `contact.html` (Contact page)
- All files in `styles/` folder

**Your Responsibilities:**
| Task | Files |
|------|-------|
| Page layouts & HTML structure | `.html` files |
| Global styles & variables | `styles/main.css` |
| Component styling | `styles/components.css` |
| Responsive grid system | `styles/layout.css` |
| Page-specific styles | `styles/home.css`, `styles/about.css`, etc. |
| Animations & transitions | All CSS files |
| Color scheme & typography | `styles/main.css` |

**Key Skills to Learn:**
- HTML5 semantic elements
- CSS Flexbox & Grid
- CSS Variables
- Responsive Design (mobile-first)
- CSS Animations & Transitions
- Accessibility basics

---

### ⚙️ Person B: The Developer (Logic Focus)

**Your Mission:** Make the app functional and interactive!

**Your Pages:**
- `mygames.html` (My Games page structure)
- All files in `scripts/` folder

**Your Responsibilities:**
| Task | Files |
|------|-------|
| API integration | `scripts/api.ts` |
| Data persistence | `scripts/storage.ts` |
| Shared app logic | `scripts/app.ts` |
| Home page functionality | `scripts/home.ts` |
| My Games functionality | `scripts/mygames.ts` |
| Event listeners & DOM | All TypeScript files |

**Key Skills to Learn:**
- TypeScript basics
- Fetch API & async/await
- localStorage API
- DOM manipulation
- Event handling
- Error handling

---

## 📅 7-Day Sprint Roadmap

### Day 1: Setup & Foundation

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| ✏️ Draw wireframes for all 4 pages | 🔧 Set up project structure |
| 📄 Create HTML skeletons | 🔑 Get RAWG API key |
| 🎨 Define color palette & fonts | 📡 Test first API call |
| 🧭 Build navigation component | 💾 Set up localStorage schema |

**🎯 Milestone:** Project structure ready, API returns data in console!

---

### Day 2: Home Page - Structure & Data

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| 🏠 Build Home page HTML | 🔄 Create API functions |
| 🎯 Add filter dropdowns HTML | 📝 Fetch trending games |
| 🃏 Create game card HTML template | 🔍 Implement search logic |
| 📱 Start mobile-first CSS | 🎯 Build filter functionality |

**🎯 Milestone:** Home page shows real game data!

---

### Day 3: Home Page - Polish & Interactivity

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| ✨ Style game cards beautifully | 📄 Add pagination logic |
| 🎨 Add hover effects & animations | ➕ "Add to Library" functionality |
| 📱 Complete responsive design | 🪟 Build game detail modal |
| 🔄 Loading state animations | ⚡ Optimize API calls |

**🎯 Milestone:** Fully functional Home page with filters!

---

### Day 4: My Games Page

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| 📚 Build My Games HTML | 💾 Implement storage functions |
| 📊 Design stats dashboard | 📂 Load/save library games |
| 🏷️ Style status badges | ⭐ Rating system logic |
| 🔘 Create filter tabs | ✍️ Review CRUD operations |

**🎯 Milestone:** Users can manage their game library!

---

### Day 5: My Games Polish + About Page

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| ⭐ Style star rating component | 🔄 Status update functionality |
| ✍️ Design review cards | 🗑️ Delete game/review logic |
| ℹ️ Build About page HTML | 📊 Calculate & display stats |
| 🎨 Style About page sections | 🔍 Library search/filter |

**🎯 Milestone:** My Games complete, About page styled!

---

### Day 6: Contact Page + Integration

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| 📬 Build Contact page HTML | � Connect all pages together |
| � Style email link button | � Bug fixes & edge cases |
| 🔗 Add social media links | � Test localStorage functions |
| 🎨 Polish all page styles | ⚡ Optimize API calls |

**🎯 Milestone:** All 4 pages functional and connected!

---

### Day 7: Testing & Deployment 🚀

| 🎨 Person A (Designer) | ⚙️ Person B (Developer) |
|------------------------|-------------------------|
| 📱 Test on mobile devices | 🐛 Final bug fixes |
| ✨ Final visual polish | ⚡ Performance optimization |
| 📸 Take screenshots for README | 🚀 Deploy to GitHub Pages/Netlify |
| 📝 Update README with images | 📝 Document any setup steps |

**🎯 Milestone:** 🎉 LIVE WEBSITE LAUNCHED!

---

## 💡 Collaboration Tips

### Daily Workflow

1. **Morning Sync** — 10 min call to discuss today's tasks
2. **Work Session** — Focus on your responsibilities
3. **Mid-day Check** — Quick sync if integration needed
4. **Evening Commit** — Both push code to GitHub

### Git Workflow

```bash
# Start of day - get latest changes
git pull origin master

# Work on your files...

# End of day - commit and push
git add .
git commit -m "Day X: Brief description of changes"
git push origin master
```

### Communication Rules

- 🟢 **Green Light** — "I'm done, you can use my code"
- 🟡 **Yellow Light** — "Working on it, don't touch yet"
- 🔴 **Red Light** — "I'm stuck, need help"

### File Ownership

| Person A Owns | Person B Owns | Shared |
|---------------|---------------|--------|
| `*.html` (structure) | `scripts/*.ts` | `README.md` |
| `styles/*.css` | `package.json` | `.gitignore` |
| `assets/` | `.env` | Testing |

---

## �📡 API Reference

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
  - [ ] Email link (mailto: Ayubackup07@gmail.com)
  - [ ] Social media links
  - [ ] Response time info
  - [ ] FAQ reference

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
