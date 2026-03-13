// ============================================
// 💾 Storage Functions - localStorage logic
// ============================================

const LIBRARY_KEY = "gameshelf_library";
const REVIEWS_KEY = "gameshelf_reviews";

// --- LIBRARY FUNCTIONS ---

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

// --- REVIEW FUNCTIONS ---

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
