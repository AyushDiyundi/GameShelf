// ============================================
// 🌐 API Functions - Fetch games from RAWG
// ============================================

const API_KEY = "36e169a1105241809b3bac464a113ea2";
const API_URL = "https://api.rawg.io/api";

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
