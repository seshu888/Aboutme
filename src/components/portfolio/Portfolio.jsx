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
            <img className='project_image' src="meghduth.com/wp-content/uploads/2022/10/Logo-Pot-1@4x-1-1-e1665773475245.png" alt=""/>
          </div>
          <h3>This is a Branding Webiste called Meghduth in Hyderabad</h3>
          <div className='portfolio_item_cta'>

          <a href="https://www.meghduth.com/" className='btn btn-primary' target="_blank">Meghduth Biryani's</a>
        </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img className='project_image' src="https://www.lifemark.ca/sites/all/themes/lifemark2015/images/logos/LHG-blue.svg" alt=""/>
          </div>
          <h3>This is a Health Management Site </h3>
          <div className='portfolio_item_cta'>
          <a href="https://www.lifemarkhealthgroup.ca/" className='btn btn-primary' target="_blank">Live Demo</a>
        </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img className='project_image' src="https://digitalagencynetwork.com/wp-content/uploads/2019/07/top-digital-agency-logo-ideas-for-designers-crowd.jpg" alt=""/>
          </div>
          <h3>This is a Brand Advertising Site of different Restuarants and food Vendors  </h3>
          <div className='portfolio_item_cta'>
            <a href="https://coeats.netlify.app/" className='btn btn-primary' target="_blank">Coeats</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img className='project_image' src="https://t3.ftcdn.net/jpg/00/07/32/48/360_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk.jpg" alt=""/>
          </div>
          <h3>This is a Admin DashBoard</h3>
          <div className='portfolio_item_cta'>
            <a href=" https://kata-solutions-test1.web.app" className='btn btn-primary' target="_blank">Kata Manufacturing Analytics</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio