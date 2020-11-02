import { useEffect, useState } from "react"
import "./overview.scss"

export default function Overview(props) {
  const seats = props.seats
  const [areThereSelectedSeats, setThereAreSelectedSeats] = useState(false)

  const selectedSeatsList = seats.map(seat => {
    const selectedSeat = seat.status === "selected"
    if (selectedSeat) 
      return <li>Seat number {seat.id}</li>
  })

  useEffect(() => {
    const selectedSeats = seats.filter(seat => seat.status === "selected")
    setThereAreSelectedSeats(selectedSeats.length > 0 ? true : false)
  }, [seats, areThereSelectedSeats])

  return (
    <section id="overview" aria-label="Overview section">
      <h1>Overview</h1>
      <div className="overview-wrapper">
        <p>{areThereSelectedSeats ? "Currently you have selected:" : "Start selecting your seats!"}</p>
        <ul>
          {selectedSeatsList}
        </ul>
        <p>Confirm your selection when you are done.</p>
      </div>
    </section>
  )
}
