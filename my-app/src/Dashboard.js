import React, { useState, useEffect } from 'react';

function Dashboard({ user }) {
    const [credits, setCredits] = useState(user.credits);

    const fetchCredits = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/player/${user.username}/credits`);
            const data = await response.json();
            setCredits(data.credits);
        } catch (err) {
            console.error('Failed to fetch credits:', err);
        }
    };

    useEffect(() => {
        fetchCredits();
    }, []);

    return (
        <div>
            <h2>Welcome, {user.username}!</h2>
            <p>Available Credits: {credits}</p>
            <button onClick={() => alert('Play game!')}>Play Game</button>
        </div>
    );
}

export default Dashboard;
