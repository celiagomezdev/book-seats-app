import React, { useState } from 'react'
import './content.scss'
import Seats from "./seats"
import Overview from "./overview"
import Button from "./button"

export default function Content() {
  const [seats, setSeats] = useState([
    {
      id: 1,
      status: "available",
    },
    {
      id: 2,
      status: "available",
    },
    {
      id: 3,
      status: "available",
    },
    {
      id: 4,
      status: "available",
    },
    {
      id: 5,
      status: "available",
    },
    {
      id: 6,
      status: "available",
    },
    {
      id: 7,
      status: "available",
    },
    {
      id: 8,
      status: "available",
    },
    {
      id: 9,
      status: "available",
    },
  ])

  const handleSeatChange = (seatId) => {
    const newSeats = seats.map(seat => {
      if (seat.status === "booked") return seat
      const checkStatus = seat.status === "selected" ? "available" : "selected"
      if (seat.id === seatId) return {...seat, status: checkStatus }
      return seat
    })

    setSeats(newSeats)
  }

  const confirmSelection = () => {    
    const newSeats = seats.map(seat => {
      const checkStatus = seat.status === "selected" ? "booked" : "available"
      return {...seat, status: checkStatus }
    })

    setSeats(newSeats)
  }

  return (
    <div id="content">
      <div className="title"><h1>Booking Seats App</h1></div>
      <div className="content-wrapper">
        <Seats seats={seats} onSeatSelection={(selectedSeat) => handleSeatChange(selectedSeat)}/>
        <Overview seats={seats} />
      </div>
      <Button text="Confirm" onClick={() => confirmSelection()}/>
    </div>
  )
}


