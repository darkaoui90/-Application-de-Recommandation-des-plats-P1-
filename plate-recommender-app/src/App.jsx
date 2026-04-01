// src/App.jsx

import { useState } from 'react'
import './App.css'
import PlateCard from './components/PlateCard'


import { BrowserRouter, Routes, Route } from 'react-router-dom';


const HomePage = () => <div><h1>Home Page</h1><p>Welcome to the Plate Recommender App!</p></div>;
const PlatesPage = () => {
  
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
    <div className="PlatesPage">
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
          <PlateCard
            key={plate.id}
            name={plate.name}
            price={plate.price}
            description={plate.description}
            is_available={plate.is_available}
          />
        ))}
      </div>
    </div>
  );
};

const PlateDetailPage = () => <div><h1>Plate Detail Page</h1><p>Details for a specific plate will go here.</p></div>;
const LoginPage = () => <div><h1>Login Page</h1><p>Login form will be here.</p></div>;
const RegisterPage = () => <div><h1>Register Page</h1><p>Registration form will be here.</p></div>;
const ProfilePage = () => <div><h1>Profile Page</h1><p>User profile information will be here.</p></div>;

function App() {
  return (

    <BrowserRouter>
      <div className="App">
       
        <nav style={{ marginBottom: '20px', padding: '10px', background: '#f0f0f0' }}>
          <a href="/">Home</a> | <a href="/plates">Plates</a> | <a href="/login">Login</a>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/plates" element={<PlatesPage />} />
          <Route path="/plates/:id" element={<PlateDetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;