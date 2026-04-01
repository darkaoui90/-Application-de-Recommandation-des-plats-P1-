// src/pages/Home.jsx

import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to the Plate Recommender App!</h1>
      <p>Discover delicious dishes from around the world.</p>
      <img 
        src="https://via.placeholder.com/600x300?text=Delicious+Food" 
        alt="Delicious Food" 
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginTop: '20px' }}
      />
    </div>
   );
}

export default Home;