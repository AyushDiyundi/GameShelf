// ============================================
// 🌐 API Functions - Fetch games from RAWG
// ============================================

const API_KEY = "36e169a1105241809b3bac464a113ea2";
const API_URL = "https://api.rawg.io/api";

async function fetchGames(params, errorMessage) {
    try {
        const response = await fetch(`${API_URL}/games?key=${API_KEY}&${params}&page_size=12`);
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error(errorMessage, error);
        return [];
    }
}

// Search games by name
async function searchGames(query) {
    return fetchGames(`search=${encodeURIComponent(query)}`, "Error searching games:");
}

// Get popular games (for home page)
async function getPopularGames() {
    return fetchGames("ordering=-rating", "Error fetching popular games:");
}

// Filter games by genre
async function filterByGenre(genre) {
    if (!genre) {
        return getPopularGames();
    }

    return fetchGames(`genres=${encodeURIComponent(genre)}`, "Error filtering games:");
}
