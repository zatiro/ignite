/* eslint-disable react/prop-types */
export default function Post(props) {
  return (
    <div>
      <h1>{props.author}</h1>
      <p>{props.content}</p>
    </div>
  )
}