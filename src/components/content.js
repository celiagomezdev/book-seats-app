import React, { useState } from 'react'
import './content.scss'
import Seats from "./seats"
import Overview from "./overview"
import Button from "./button"

export default function Content() {
  const [seats, setSeats] = useState([
    {
      id: 1,
      number: 1,
      status: "available",
    },
    {
      id: 2,
      number: 2,
      status: "available",
    },
    {
      id: 3,
      number: 3,
      status: "available",
    },
    {
      id: 4,
      number: 4,
      status: "available",
    },
    {
      id: 5,
      number: 5,
      status: "available",
    },
    {
      id: 6,
      number: 6,
      status: "available",
    },
    {
      id: 7,
      number: 7,
      status: "available",
    },
    {
      id: 8,
      number: 8,
      status: "available",
    },
    {
      id: 9,
      number: 9,
      status: "available",
    },
  ])

  return (
    <div id="content">
      <div className="title"><h1>Booking Seats App</h1></div>
      <div className="content-wrapper">
        <Seats seats={seats}/>
        <Overview seats={seats} />
      </div>
      <Button text="Confirm" />
    </div>
  )
}


