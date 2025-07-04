import './Reservations.css'
function Reservations({ reservations }) {
  return (
    <div className="reservations">
      <h1>Your Reservations</h1>
      {reservations.length === 0 ? (
        <p className="no-reservations">You do not have any reservations</p>
      ) : (
        <ul>
          {reservations.map((res, index) => (
            <li key={index}>
              {res.name} - {res.date} at {res.time} for {res.guests} guests
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reservations;