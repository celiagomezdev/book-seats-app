import "./button.scss"

export default function Button(props) {
  return (
    <button type="button"> 
      <h2>{props.text}</h2>
    </button>
  )
}
