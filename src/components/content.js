import './content.scss'
import Seats from "./seats"
import Overview from "./overview"

export default function Content() {
  return (
    <div id="content">
      <div className="title"><h1>Booking Seats App</h1></div>
      <div className="content-wrapper">
        <Seats />
        <Overview />
      </div>
    </div>
  )
}


