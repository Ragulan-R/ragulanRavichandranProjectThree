import React from 'react'

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: { name, portfolio_url },
}) => {
  return (
    <section>
      <img src='{regular}' alt='alt_description' />
      <div className='photoDetails'>
        <h5>{name}</h5>
        <p>{likes}</p>
        <a href={portfolio_url}></a>
      </div>
    </section>
  )
}

export default Photo
