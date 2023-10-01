import React from 'react'

const Card = (props) => {
  return (
    <div className="card w-96 bg-second shadow-xl my-5">
    <figure><img src={props.url}/></figure>
    <div className="card-body text-text">
      <h2 className="card-title">{props.title}</h2>
      <p>{props.desc1}</p>
      <p>{props.desc2}</p>
    </div>
  </div>
  )
}

export default Card