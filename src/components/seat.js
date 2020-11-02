import "./seat.scss"

export default function Seat(props) {
  return (
    <section className="seat" aria-label="Seat 1">
      <h1> {props.number} </h1>
    </section>
  )
}
