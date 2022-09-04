import React from 'react'
import "./article.css"
import Article_card from './Article_card'
import Restaurant from "../../Assets/image-restaurant.jpg"
import Currency from "../../Assets/image-currency.jpg"
import Plane from "../../Assets/image-plane.jpg"
import Confetti from "../../Assets/image-confetti.jpg"
const Article = () => {
  return (
    <div className='article_container'>
      <div className="wrapper">
        <h2 className='article__heading'>Latest Article</h2>
        <div className="article_card_container">
          <Article_card img={Currency} writer={`Claire Robinson`} heading={`Receive money in any currency with no fees`} paragraph={`The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …`} />
          <Article_card img={Restaurant} writer={`Wilson Hutton`} heading={`Treat yourself without worrying about money`} paragraph={`Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …`} />
          <Article_card img={Plane} writer={`Wilson Hutton`} heading={`Take your Easybank card wherever you go`} paragraph={`We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …`} />
          <Article_card img={Confetti} writer={`Claire Robinson`} heading={`Our invite-only Beta accounts are now live!`} paragraph={`After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...`} />
        </div>
      </div>
    </div>
  )
}

export default Article
