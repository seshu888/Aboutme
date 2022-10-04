import React from 'react'
import './portfolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img className='project_image' src="https://www.analyticsinsight.net/wp-content/uploads/2020/07/Graph-Analytics.jpg" alt=""/>
          </div>
          <h3>This is a portfolio item Title</h3>
          <div className='portfolio_item_cta'>
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
        </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img className='project_image' src="https://www.analyticsinsight.net/wp-content/uploads/2020/07/Graph-Analytics.jpg" alt=""/>
          </div>
          <h3>This is a portfolio item Title</h3>
          <div className='portfolio_item_cta'>
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
        </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img className='project_image' src="https://www.analyticsinsight.net/wp-content/uploads/2020/07/Graph-Analytics.jpg" alt=""/>
          </div>
          <h3>This is a portfolio item Title</h3>
          <div className='portfolio_item_cta'>
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img className='project_image' src="https://www.analyticsinsight.net/wp-content/uploads/2020/07/Graph-Analytics.jpg" alt=""/>
          </div>
          <h3>This is a portfolio item Title</h3>
          <div className='portfolio_item_cta'>
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio