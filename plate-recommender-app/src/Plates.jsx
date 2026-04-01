// src/pages/Plates.jsx

import React, { useState } from 'react';
import PlateCard from '../components/PlateCard'; // Adjust path if necessary
import { Link } from 'react-router-dom'; // Import Link for navigation

function Plates() {
  const allPlates = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      price: 120,
      description: 'Classic Italian pasta dish with eggs, hard cheese, cured pork, and black pepper.',
      is_available: true,
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      price: 95,
      description: 'A Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and olive oil.',
      is_available: false,
    },
    {
      id: 3,
      name: 'Caesar Salad',
      price: 70,
      description: 'A green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon Mustard, Parmesan cheese, and black pepper.',
      is_available: true,
    },
    {
      id: 4,
      name: 'Chicken Curry',
      price: 110,
      description: 'A rich and aromatic chicken curry with traditional Indian spices.',
      is_available: true,
    },
    {
      id: 5,
      name: 'Vegan Burger',
      price: 85,
      description: 'A delicious plant-based burger with fresh vegetables and a special sauce.',
      is_available: false,
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlates = allPlates.filter(plate =>
    plate.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Our Delicious Plates</h1>
      <input
        type="text"
        placeholder="Search for a plate..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginBottom: '20px',
          width: '300px',
        }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredPlates.length === 0 && <p>No plates found matching your search.</p>}
        {filteredPlates.map(plate => (
          <Link to={`/plates/${plate.id}`} key={plate.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <PlateCard
              name={plate.name}
              price={plate.price}
              description={plate.description}
              is_available={plate.is_available}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Plates;