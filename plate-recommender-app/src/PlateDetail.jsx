

import React from 'react';
import { useParams } from 'react-router-dom';

function PlateDetail() {
  const { id } = useParams(); 

  
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Plate Detail Page</h1>
      <p>Details for Plate ID: {id}</p>
      <p>In a future step, we will fetch the actual plate data using this ID.</p>
    </div>
  );
}

export default PlateDetail;