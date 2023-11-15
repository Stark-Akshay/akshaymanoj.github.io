import React from 'react'

const Card = (props) => {
  return (
    <div className="card w-96 bg-second shadow-xl my-5">
    <figure><img src={props.url}/></figure>
    <div className="card-body text-text">
      <h2 className="card-title">{props.title}</h2>
      <p>{props.desc1}</p>
      <p>{props.desc2}</p>
      {props.code && <a className='w-full' href="https://github.com/Stark-Akshay/weatherapp"><button className='bg-ascent p-3 w-full rounded-lg flex items-center justify-center'>Code</button></a>}
      
    </div>
  </div>
  )
}

export default Card