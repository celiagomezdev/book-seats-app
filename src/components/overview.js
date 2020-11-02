import { useEffect, useState } from "react"
import "./overview.scss"

export default function Overview(props) {
  const seats = props.seats
  const [areThereSelectedSeats, setThereAreSelectedSeats] = useState(false)
  const [areThereBookedSeats, setAreThereBookedSeats] = useState(false)

  const seatsList = seats.map(seat => {
    const selectedOrBookedSeat = seat.status === "selected" || seat.status === "booked"
    if (selectedOrBookedSeat) 
      return <li>Seat number {seat.id}</li>
  })

  useEffect(() => {
    const selectedSeats = seats.filter(seat => seat.status === "selected")
    setThereAreSelectedSeats(selectedSeats.length > 0 ? true : false)

    const bookedSeats = seats.filter(seat => seat.status === "booked")
    setAreThereBookedSeats(bookedSeats.length > 0 ? true : false)
  }, [seats, areThereSelectedSeats, areThereBookedSeats])

  const currentOverviewText = () => {
    if (areThereSelectedSeats) return "Currently you have selected:" 
    else if (areThereBookedSeats) return "These are your booked seats:" 
    else return "Start selecting your seats!"
  }
  return (
    <section id="overview" aria-label="Overview section">
      <h1>Overview</h1>
      <div className="overview-wrapper">
        { areThereBookedSeats && <h1 className="confirmed-title">SEATS CONFIRMED!</h1> }
        <p>{currentOverviewText()}</p>
        <ul>
          {seatsList}
        </ul>
        <p>Confirm your selection when you are done.</p>
      </div>
    </section>
  )
}
