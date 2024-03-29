import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import PortfolioData from "./PortfolioData"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center'>
            <h1>Portfolio</h1>
          </div>

          <div className='content grid'>
            {PortfolioData.map((value, index) => {
              return <Card key={index} category={value.category} title={value.title} image={value.image} link={value.link} desc={value.desc}/>
            })}

            {/*<div className='box btn_shadow '>
              <div className='img'>
                  <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Development</span>
                  <label>
                    <i className='far fa-heart'></i> 360
                  </label>
              </div>
              <div className='title'>
                  <h2>Mobile app landing design & Services</h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
