// ============================================
// 🌐 API Functions - Fetch games from RAWG
// ============================================

const API_KEY = "36e169a1105241809b3bac464a113ea2";
const API_URL = "https://api.rawg.io/api";

async function fetchGames(params, errorMessage) {
    try {
        const query = new URLSearchParams({ key: API_KEY, page_size: "12" });

        Object.entries(params || {}).forEach(([key, value]) => {
            if (value !== "" && value !== null && value !== undefined) {
                query.set(key, value);
            }
        });

        const response = await fetch(`${API_URL}/games?${query.toString()}`);
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error(errorMessage, error);
        return [];
    }
}

// Search games by name
async function searchGames(query) {
    return fetchGames({ search: query }, "Error searching games:");
}

// Get popular games (for home page)
async function getPopularGames() {
    return fetchGames({ ordering: "-rating" }, "Error fetching popular games:");
}

// Combined filters for home page controls
async function filterGames(filters) {
    const selectedFilters = filters || {};
    const params = {
        ordering: "-rating",
        search: selectedFilters.search,
        genres: selectedFilters.genre
    };

    if (selectedFilters.year) {
        params.dates = `${selectedFilters.year}-01-01,${selectedFilters.year}-12-31`;
    }

    const games = await fetchGames(params, "Error applying filters:");
    const minRating = Number(selectedFilters.minRating || 0);

    if (minRating > 0) {
        return games.filter(game => (game.rating || 0) >= minRating);
    }

    return games;
}

// Filter games by genre
async function filterByGenre(genre) {
    return filterGames({ genre: genre });
}
