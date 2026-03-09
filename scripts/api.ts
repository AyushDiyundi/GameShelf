import 'dotenv/config';

// ============================================
// 🎮 QuestLog - API Module
// Handles all communication with RAWG API
// ============================================

// Your RAWG API key - loaded from environment variable
// Set RAWG_API_KEY in your .env file
const API_KEY = process.env.RAWG_API_KEY || "";
const BASE_URL = "https://api.rawg.io/api";

// --------------------------------------------
// Type Definitions
// --------------------------------------------

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  released: string;
  genres: { id: number; name: string }[];
  platforms: { platform: { id: number; name: string } }[];
  metacritic: number | null;
}

export interface GameDetails extends Game {
  description_raw: string;
  developers: { id: number; name: string }[];
  publishers: { id: number; name: string }[];
  website: string;
  playtime: number;
}

export interface APIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

// --------------------------------------------
// API Functions
// --------------------------------------------

/**
 * Fetch popular/trending games
 * @param page - Page number for pagination (default: 1)
 * @param pageSize - Number of games per page (default: 20)
 */
export async function getPopularGames(page: number = 1, pageSize: number = 20): Promise<Game[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&page=${page}&page_size=${pageSize}&ordering=-rating`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: APIResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular games:", error);
    return [];
  }
}

/**
 * Search for games by name
 * @param query - Search term
 * @param page - Page number for pagination (default: 1)
 */
export async function searchGames(query: string, page: number = 1): Promise<Game[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&search=${encodeURIComponent(query)}&page=${page}&page_size=20`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: APIResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching games:", error);
    return [];
  }
}

/**
 * Get detailed information about a specific game
 * @param gameId - The game's unique ID
 */
export async function getGameDetails(gameId: number): Promise<GameDetails | null> {
  try {
    const response = await fetch(
      `${BASE_URL}/games/${gameId}?key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GameDetails = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching game details:", error);
    return null;
  }
}

/**
 * Get games by genre
 * @param genreId - Genre ID (e.g., 4 = Action, 5 = RPG)
 * @param page - Page number for pagination
 */
export async function getGamesByGenre(genreId: number, page: number = 1): Promise<Game[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&genres=${genreId}&page=${page}&page_size=20`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: APIResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching games by genre:", error);
    return [];
  }
}

// --------------------------------------------
// Helper: Test your API connection
// --------------------------------------------

export async function testAPIConnection(): Promise<boolean> {
  try {
    const games = await getPopularGames(1, 1);
    if (games.length > 0) {
      console.log("✅ API Connection successful!");
      console.log("Sample game:", games[0].name);
      return true;
    }
    console.log("❌ API returned no results. Check your API key.");
    return false;
  } catch (error) {
    console.error("❌ API Connection failed:", error);
    return false;
  }
}
