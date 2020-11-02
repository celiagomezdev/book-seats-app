import Seat from "./seat.js"
import "./seats.scss"

export default function Seats(props) {
  const seats = props.seats

  const listOfSeats = seats.map(seat => <Seat number={seat.number}/>)

  return (
    <section id="seats" aria-label="Seats section">
      <h1>Seats</h1>
      <div class="seats-wrapper">
        {listOfSeats}
      </div>
    </section>
  )
}
