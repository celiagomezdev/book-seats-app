import Seat from "./seat.js"
import "./seats.scss"

export default function Seats(props) {
  const seats = props.seats

  const handleSeatSelection = (seatId) => {
    props.onSeatSelection(seatId)
  }

  const listOfSeats = seats.map(seat => 
    <Seat seat={seat} key={seat.id} onSeatSelection={(seatId) => handleSeatSelection(seatId)}/>
  )

  return (
    <section id="seats" aria-label="Seats section">
      <h1>Seats</h1>
      <div class="seats-wrapper">
        {listOfSeats}
      </div>
    </section>
  )
}
