export default function PlateCard({ name, price, description, is_available }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px',
        maxWidth: '300px',
      }}
    >
      <h2>{name}</h2>
      <p>
        <strong>Price:</strong> {price} MAD
      </p>
      <p>{description}</p>

      {/* Conditional Rendering */}
      {is_available && (
        <span style={{ color: 'green', fontWeight: 'bold' }}>Disponible</span>
      )}
    </div>
  )
}
