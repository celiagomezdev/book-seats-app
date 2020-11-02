import Seat from "./seat.js"
import "./seats.scss"

export default function Seats(props) {
  const seats = props.seats
  const disabled = props.disabled

  const handleSeatSelection = (seatId) => {
    if (disabled) return alert("Booking complete! Refresh page for a new booking.") 

    props.onSeatSelection(seatId)
  }

  const listOfSeats = seats.map(seat => 
    <Seat disabled={seat.disabled} seat={seat} key={seat.id} onSeatSelection={(seatId) => handleSeatSelection(seatId)}/>
  )

  return (
    <section id="seats" aria-label="Seats section">
      <h1>Seats</h1>
      <div className="seats-wrapper">
        {listOfSeats}
      </div>
    </section>
  )
}
