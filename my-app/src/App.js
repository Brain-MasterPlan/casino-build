import React from 'react';
import Header from './components/Header';
import PlayerCredits from './components/PlayerCredits';

function App() {
    return (
        <div>
            <Header />
            <main>
                <PlayerCredits />
                <p>This is my app's content.</p>
            </main>
        </div>
    );
}

export default App;


