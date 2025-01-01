const API_URL = 'http://localhost:3000/api/player';

export async function getPlayerCredits(username) {
    const response = await fetch(`${API_URL}/${username}/credits`);
    if (!response.ok) {
        throw new Error('Failed to fetch player credits');
    }
    return response.json();
}
