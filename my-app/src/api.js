import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
    const [user, setUser] = useState(null); // Store logged-in user

    return (
        <div>
            {!user ? (
                <Login setUser={setUser} />
            ) : (
                <Dashboard user={user} />
            )}
        </div>
    );
}

export default App;
