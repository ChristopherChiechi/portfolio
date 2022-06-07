import React from "react"
import "../Portfolio/Portfolio.css"
import "./Blog.css"
import Card from "./Card"
import BlogApi from "./BlogApi"

const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='analyses'>
        <div className='container top'>
          <div className='heading text-center'>
            {/*<h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>*/}
            <h1>Game Analyses</h1>
          </div>

          <div className='content grid'>
            {BlogApi.map((value, index) => {
              return <Card key={index}
                image={value.image}
                name={value.name}
                subtitle={value.subtitle}
                title_1={value.title_1}
                title_2={value.title_2}
                title_3={value.title_3}
                title_4={value.title_4}
                desc_1={value.desc_1}
                desc_2={value.desc_2}
                desc_3={value.desc_3}
                desc_4={value.desc_4}
                sub_1={value.sub_1}
                sub_2={value.sub_2}
                sub_3={value.sub_3}
                sub_4={value.sub_4}
              />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
