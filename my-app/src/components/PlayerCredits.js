import React, { useState } from 'react';
import { getPlayerCredits } from './api';

function PlayerCredits() {
    const [username, setUsername] = useState('');
    const [credits, setCredits] = useState(null);
    const [error, setError] = useState(null);

    const fetchCredits = async () => {
        try {
            const data = await getPlayerCredits(username);
            setCredits(data.credits);
            setError(null);
        } catch (err) {
            setCredits(null);
            setError(err.message);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
            />
            <button onClick={fetchCredits}>Get Credits</button>
            {credits !== null && <p>Credits: {credits}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default PlayerCredits;
