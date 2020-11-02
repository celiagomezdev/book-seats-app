import classNames from "classnames"
import "./seat.scss"

export default function Seat(props) {
  const selectSeat = (seatId) => {
    props.onSeatSelection(seatId)
  }

  const seatClass = classNames({
    seat: true,
    selected: props.seat.status === "selected",
    booked: props.seat.status === "booked"
  })

  return (
    <section className={seatClass} aria-label="Seat 1" onClick={() => selectSeat(props.seat.id)}>
      <h1> {props.seat.id} </h1>
    </section>
  )
}
