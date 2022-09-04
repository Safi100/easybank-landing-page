import React from 'react'

const Article_card = ({img, writer, heading, paragraph}) => {
  return (
    <div className='article__card'>
      <div className="article__img__container"><img src={img} alt="card img" /></div>
      <div className="article__card__info">
         <p className='card__writer'>By {writer}</p>
         <h3 className="card__heading">{heading}</h3>
         <p className='card__paragraph'>{paragraph}</p>
      </div>
    </div>
  )
}

export default Article_card
