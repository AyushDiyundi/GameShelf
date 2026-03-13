// ============================================
// 🎮 Main App - Display & Event Handlers
// ============================================

// --- DISPLAY FUNCTIONS ---

// Display games on home page
function displayGames(games, container) {
    container.innerHTML = "";
    
    if (games.length === 0) {
        container.innerHTML = "<p class='no-results'>No games found 😔</p>";
        return;
    }
    
    games.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        
        const image = game.background_image || "https://via.placeholder.com/300x200?text=No+Image";
        const rating = game.rating || 0;
        const stars = "⭐".repeat(Math.round(rating));
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
    container.innerHTML = "";
    
    if (library.length === 0) {
        container.innerHTML = "<p class='no-results'>Your library is empty! Add games from the Home page 🎮</p>";
        return;
    }
    
    library.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card library-card";
        
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
    container.innerHTML = "";
    
    if (reviews.length === 0) {
        container.innerHTML = "<p class='no-results'>No reviews yet! Rate a game and write a review 📝</p>";
        return;
    }
    
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
    
    const totalEl = document.getElementById("totalGames");
    const ratedEl = document.getElementById("ratedGames");
    const reviewsEl = document.getElementById("totalReviews");
    
    if (totalEl) totalEl.textContent = library.length;
    if (ratedEl) ratedEl.textContent = library.filter(g => g.rating > 0).length;
    if (reviewsEl) reviewsEl.textContent = reviews.length;
}

// --- REVIEW MODAL ---

function openReviewModal(gameId, gameName) {
    const library = getLibrary();
    const game = library.find(g => g.id === gameId);
    const currentRating = game ? game.rating : 0;
    
    const reviews = getReviews();
    const existingReview = reviews.find(r => r.gameId === gameId);
    
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
    window.selectedModalRating = currentRating;
}

function selectModalRating(rating) {
    window.selectedModalRating = rating;
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
    
    rateGame(gameId, rating);
    
    if (text) {
        saveReview(gameId, gameName, rating, text);
    }
    
    closeReviewModal();
}

function closeReviewModal() {
    const modal = document.getElementById("reviewModal");
    if (modal) modal.remove();
}

// --- HELPER FUNCTIONS ---

function showLoading(show) {
    const loading = document.getElementById("loading");
    if (loading) loading.style.display = show ? "block" : "none";
}

async function loadGames() {
    const gamesContainer = document.getElementById("gamesContainer");
    if (!gamesContainer) return;
    
    showLoading(true);
    const games = await getPopularGames();
    displayGames(games, gamesContainer);
    showLoading(false);
}

// --- INITIALIZATION ---

document.addEventListener("DOMContentLoaded", function() {
    console.log("🎮 GameShelf Loaded!");
    
    // --- HOME PAGE ---
    const gamesContainer = document.getElementById("gamesContainer");
    const searchInput = document.getElementById("searchInput");
    const genreFilter = document.getElementById("genreFilter");
    
    if (gamesContainer) {
        loadGames();
        
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
