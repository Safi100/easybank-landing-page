import React from 'react'

const Card = ({img, header, paragraph}) => {
  return (
    <div className='benefit__card'>
      <div className="img__container"><img src={img} alt="icon" /></div>
      <h3 className='benefit__header'>{header}</h3>
      <p className='benefit__paragraph'>{paragraph}</p>
    </div>
  )
}

export default Card
