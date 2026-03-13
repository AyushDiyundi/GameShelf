// ============================================
// 🎮 GameShelf - Main JavaScript File
// All functionality in ONE file (Beginner Friendly)
// ============================================

// --------------------------------------------
// 🔑 API Configuration
// --------------------------------------------
const API_KEY = "36e169a1105241809b3bac464a113ea2";
const API_URL = "https://api.rawg.io/api";

// --------------------------------------------
// 📦 localStorage Keys
// --------------------------------------------
const LIBRARY_KEY = "gameshelf_library";
const REVIEWS_KEY = "gameshelf_reviews";

// ============================================
// 🌐 API FUNCTIONS (Fetch games from RAWG)
// ============================================

// Search games by name
async function searchGames(query) {
    try {
        const response = await fetch(
            `${API_URL}/games?key=${API_KEY}&search=${query}&page_size=12`
        );
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error searching games:", error);
        return [];
    }
}

// Get popular games (for home page)
async function getPopularGames() {
    try {
        const response = await fetch(
            `${API_URL}/games?key=${API_KEY}&ordering=-rating&page_size=12`
        );
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching popular games:", error);
        return [];
    }
}

// Filter games by genre
async function filterByGenre(genre) {
    try {
        const url = genre 
            ? `${API_URL}/games?key=${API_KEY}&genres=${genre}&page_size=12`
            : `${API_URL}/games?key=${API_KEY}&page_size=12`;
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error filtering games:", error);
        return [];
    }
}

// ============================================
// 🎴 DISPLAY FUNCTIONS (Show games on page)
// ============================================

// Display games on home page
function displayGames(games, container) {
    // Clear container
    container.innerHTML = "";
    
    // Check if no games
    if (games.length === 0) {
        container.innerHTML = "<p class='no-results'>No games found 😔</p>";
        return;
    }
    
    // Create card for each game
    games.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        
        // Get image or placeholder
        const image = game.background_image || "https://via.placeholder.com/300x200?text=No+Image";
        
        // Get rating stars
        const rating = game.rating || 0;
        const stars = "⭐".repeat(Math.round(rating));
        
        // Check if game is in library
        const inLibrary = isInLibrary(game.id);
        
        card.innerHTML = `
            <img src="${image}" alt="${game.name}">
            <div class="card-content">
                <h3>${game.name}</h3>
                <p class="rating">${stars} ${rating.toFixed(1)}</p>
                <p class="genres">${game.genres?.map(g => g.name).slice(0, 2).join(", ") || "Unknown"}</p>
                <button class="btn ${inLibrary ? 'btn-danger' : 'btn-primary'}" 
                        onclick="${inLibrary ? `removeGame(${game.id})` : `saveGame(${game.id}, '${game.name.replace(/'/g, "\\'")}', '${image}')`}">
                    ${inLibrary ? "✓ In Library" : "+ Add to Library"}
                </button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Display library on My Games page
function displayLibrary(container) {
    const library = getLibrary();
    
    // Clear container
    container.innerHTML = "";
    
    // Check if library is empty
    if (library.length === 0) {
        container.innerHTML = "<p class='no-results'>Your library is empty! Add games from the Home page 🎮</p>";
        return;
    }
    
    // Create card for each saved game
    library.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card library-card";
        
        // Create star rating HTML
        let starsHTML = "";
        for (let i = 1; i <= 5; i++) {
            starsHTML += `<span class="star ${i <= game.rating ? 'active' : ''}" 
                               onclick="rateGame(${game.id}, ${i})">★</span>`;
        }
        
        card.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <div class="card-content">
                <h3>${game.name}</h3>
                <div class="star-rating">${starsHTML}</div>
                <button class="btn btn-primary" onclick="openReviewModal(${game.id}, '${game.name.replace(/'/g, "\\'")}')">
                    ✍️ Write Review
                </button>
                <button class="btn btn-danger" onclick="removeGame(${game.id})">
                    🗑️ Remove
                </button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Display reviews on My Games page
function displayReviews(container) {
    const reviews = getReviews();
    
    // Clear container
    container.innerHTML = "";
    
    // Check if no reviews
    if (reviews.length === 0) {
        container.innerHTML = "<p class='no-results'>No reviews yet! Rate a game and write a review 📝</p>";
        return;
    }
    
    // Create card for each review
    reviews.forEach(review => {
        const card = document.createElement("div");
        card.className = "review-card";
        
        const stars = "⭐".repeat(review.rating);
        
        card.innerHTML = `
            <h4>${review.gameName}</h4>
            <p class="rating">${stars}</p>
            <p class="review-text">${review.text}</p>
            <small>Written on ${new Date(review.date).toLocaleDateString()}</small>
            <button class="btn btn-danger btn-small" onclick="deleteReview(${review.gameId})">Delete</button>
        `;
        
        container.appendChild(card);
    });
}

// Update stats on My Games page
function updateStats() {
    const library = getLibrary();
    const reviews = getReviews();
    
    // Update stat elements if they exist
    const totalEl = document.getElementById("totalGames");
    const ratedEl = document.getElementById("ratedGames");
    const reviewsEl = document.getElementById("totalReviews");
    
    if (totalEl) totalEl.textContent = library.length;
    if (ratedEl) ratedEl.textContent = library.filter(g => g.rating > 0).length;
    if (reviewsEl) reviewsEl.textContent = reviews.length;
}

// ============================================
// 💾 localStorage FUNCTIONS (Save/Load data)
// ============================================

// Get library from localStorage
function getLibrary() {
    const data = localStorage.getItem(LIBRARY_KEY);
    return data ? JSON.parse(data) : [];
}

// Save library to localStorage
function saveLibrary(library) {
    localStorage.setItem(LIBRARY_KEY, JSON.stringify(library));
}

// Check if game is in library
function isInLibrary(gameId) {
    const library = getLibrary();
    return library.some(game => game.id === gameId);
}

// Save a game to library
function saveGame(id, name, image) {
    const library = getLibrary();
    
    // Check if already in library
    if (isInLibrary(id)) {
        alert("Game already in library!");
        return;
    }
    
    // Add new game
    library.push({
        id: id,
        name: name,
        image: image,
        rating: 0,
        dateAdded: new Date().toISOString()
    });
    
    saveLibrary(library);
    alert(`${name} added to library! 🎮`);
    
    // Refresh display if on home page
    if (document.getElementById("gamesContainer")) {
        location.reload();
    }
}

// Remove a game from library
function removeGame(gameId) {
    if (!confirm("Remove this game from your library?")) return;
    
    let library = getLibrary();
    library = library.filter(game => game.id !== gameId);
    saveLibrary(library);
    
    // Also remove any reviews for this game
    deleteReview(gameId);
    
    // Refresh the page
    location.reload();
}

// Rate a game (1-5 stars)
function rateGame(gameId, rating) {
    const library = getLibrary();
    const game = library.find(g => g.id === gameId);
    
    if (game) {
        game.rating = rating;
        saveLibrary(library);
        
        // Refresh library display
        const container = document.getElementById("libraryContainer");
        if (container) {
            displayLibrary(container);
            updateStats();
        }
    }
}

// Get reviews from localStorage
function getReviews() {
    const data = localStorage.getItem(REVIEWS_KEY);
    return data ? JSON.parse(data) : [];
}

// Save reviews to localStorage
function saveReviewsData(reviews) {
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
}

// Save a review
function saveReview(gameId, gameName, rating, text) {
    const reviews = getReviews();
    
    // Remove existing review for this game (update)
    const filtered = reviews.filter(r => r.gameId !== gameId);
    
    // Add new review
    filtered.push({
        gameId: gameId,
        gameName: gameName,
        rating: rating,
        text: text,
        date: new Date().toISOString()
    });
    
    saveReviewsData(filtered);
    
    // Refresh reviews display
    const container = document.getElementById("reviewsContainer");
    if (container) {
        displayReviews(container);
        updateStats();
    }
    
    alert("Review saved! 📝");
}

// Delete a review
function deleteReview(gameId) {
    let reviews = getReviews();
    reviews = reviews.filter(r => r.gameId !== gameId);
    saveReviewsData(reviews);
    
    // Refresh reviews display
    const container = document.getElementById("reviewsContainer");
    if (container) {
        displayReviews(container);
        updateStats();
    }
}

// ============================================
// 📝 REVIEW MODAL (Popup to write review)
// ============================================

function openReviewModal(gameId, gameName) {
    // Get game rating
    const library = getLibrary();
    const game = library.find(g => g.id === gameId);
    const currentRating = game ? game.rating : 0;
    
    // Get existing review
    const reviews = getReviews();
    const existingReview = reviews.find(r => r.gameId === gameId);
    
    // Create modal HTML
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "reviewModal";
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="closeReviewModal()">&times;</span>
            <h2>Review: ${gameName}</h2>
            
            <label>Your Rating:</label>
            <div class="star-rating" id="modalStars">
                ${[1,2,3,4,5].map(i => 
                    `<span class="star ${i <= currentRating ? 'active' : ''}" 
                           onclick="selectModalRating(${i})">★</span>`
                ).join('')}
            </div>
            
            <label>Your Review:</label>
            <textarea id="reviewText" rows="4" placeholder="What did you think of this game?">${existingReview?.text || ''}</textarea>
            
            <button class="btn btn-primary" onclick="submitReview(${gameId}, '${gameName.replace(/'/g, "\\'")}')">
                Save Review
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Store selected rating
    window.selectedModalRating = currentRating;
}

function selectModalRating(rating) {
    window.selectedModalRating = rating;
    
    // Update star display
    const stars = document.querySelectorAll("#modalStars .star");
    stars.forEach((star, index) => {
        star.className = index < rating ? "star active" : "star";
    });
}

function submitReview(gameId, gameName) {
    const text = document.getElementById("reviewText").value.trim();
    const rating = window.selectedModalRating || 0;
    
    if (rating === 0) {
        alert("Please select a rating!");
        return;
    }
    
    // Update game rating in library
    rateGame(gameId, rating);
    
    // Save review if text provided
    if (text) {
        saveReview(gameId, gameName, rating, text);
    }
    
    closeReviewModal();
}

function closeReviewModal() {
    const modal = document.getElementById("reviewModal");
    if (modal) {
        modal.remove();
    }
}

// ============================================
// 🚀 INITIALIZATION (Run when page loads)
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    console.log("🎮 GameShelf Loaded!");
    
    // --- HOME PAGE ---
    const gamesContainer = document.getElementById("gamesContainer");
    const searchInput = document.getElementById("searchInput");
    const genreFilter = document.getElementById("genreFilter");
    const loading = document.getElementById("loading");
    
    if (gamesContainer) {
        // Load popular games on start
        loadGames();
        
        // Search functionality
        if (searchInput) {
            searchInput.addEventListener("keyup", async function(e) {
                if (e.key === "Enter") {
                    const query = searchInput.value.trim();
                    if (query) {
                        showLoading(true);
                        const games = await searchGames(query);
                        displayGames(games, gamesContainer);
                        showLoading(false);
                    }
                }
            });
        }
        
        // Genre filter functionality
        if (genreFilter) {
            genreFilter.addEventListener("change", async function() {
                const genre = genreFilter.value;
                showLoading(true);
                const games = await filterByGenre(genre);
                displayGames(games, gamesContainer);
                showLoading(false);
            });
        }
    }
    
    // --- MY GAMES PAGE ---
    const libraryContainer = document.getElementById("libraryContainer");
    const reviewsContainer = document.getElementById("reviewsContainer");
    
    if (libraryContainer) {
        displayLibrary(libraryContainer);
        updateStats();
    }
    
    if (reviewsContainer) {
        displayReviews(reviewsContainer);
    }
});

// Load games on home page
async function loadGames() {
    const gamesContainer = document.getElementById("gamesContainer");
    if (!gamesContainer) return;
    
    showLoading(true);
    const games = await getPopularGames();
    displayGames(games, gamesContainer);
    showLoading(false);
}

// Show/hide loading indicator
function showLoading(show) {
    const loading = document.getElementById("loading");
    if (loading) {
        loading.style.display = show ? "block" : "none";
    }
}

// ============================================
// 🎉 That's all! Simple and beginner-friendly!
// ============================================
