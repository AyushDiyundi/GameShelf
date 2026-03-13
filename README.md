# GameShelf

GameShelf is a beginner-friendly game discovery and tracking web app.
You can search games, save them to your personal library, rate them, and write short reviews.

## Live Demo

https://game-shelf-gilt.vercel.app/

## What the Project Does

- Shows trending games from the RAWG API.
- Lets users search for games by name.
- Lets users filter games by genre.
- Lets users add or remove games from a personal library.
- Lets users rate games with a 1-5 star system.
- Lets users write and delete reviews.
- Stores library and reviews in browser `localStorage`.
- Displays personal stats (total games, rated games, total reviews).

## Features

### Home Page (`index.html`)
- Trending games list.
- Search bar for game titles.
- Genre filter dropdown.
- Add to Library / Remove from Library buttons.

### My Games Page (`mygames.html`)
- Personal game library view.
- Star rating interaction for each saved game.
- Review modal for writing and saving reviews.
- Reviews list with delete option.
- Stats dashboard.

### About Page (`about.html`)
- Project mission.
- Feature highlights.
- Team section.
- FAQ section.

### Contact Page (`contact.html`)
- Contact form layout.
- Additional links (email, Discord, GitHub).

## Project Structure

```text
GameShelf/
  about.html
  contact.html
  index.html
  mygames.html
  js/
    api.js
    app.js
    storage.js
  styles/
    components.css
    layout.css
    main.css
```

## File Roles

- `index.html`: Entry page with discovery/search/filter UI.
- `mygames.html`: User library, ratings, reviews, and stats.
- `about.html`: Info content about the project and team.
- `contact.html`: Contact information and message form UI.
- `js/api.js`: RAWG API requests (popular games, search, genre filter).
- `js/app.js`: DOM rendering, event handling, review modal, page initialization.
- `js/storage.js`: `localStorage` helpers for library and review persistence.
- `styles/main.css`: Base styles, variables, typography, spacing.
- `styles/layout.css`: Page-level layout (header, grids, responsive structure).
- `styles/components.css`: Reusable UI components (cards, buttons, modal, forms).

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- RAWG Video Games Database API
- Browser `localStorage`
- Vercel (deployment)

## How to Run Locally

This is a static frontend project (no backend server required).

### Option 1: Open directly
1. Download or clone the project.
2. Open `index.html` in your browser.

### Option 2: Use VS Code Live Server (recommended)
1. Open the folder in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html` -> **Open with Live Server**.

## Notes

- Data is saved in your browser only.
- Clearing browser storage will remove your saved library and reviews.
- API results depend on network availability and RAWG API response.

