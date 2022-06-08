import React from "react"
import "../Portfolio/Portfolio.css"
import "./Blog.css"
import Card from "./Card"
import BlogData from "./BlogData"

const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='analyses'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>Game Analyses</h1>
          </div>

          <div className='content grid'>
            {BlogData.map((value, index) => {
              return <Card key={index}
                image={value.image}
                name={value.name}
                subtitle={value.subtitle}
                title1={value.title1}
                title2={value.title2}
                title3={value.title3}
                title4={value.title4}
                title5={value.title5}
                title6={value.title6}
                title7={value.title7}
                sub1_1={value.sub1_1}
                sub1_2={value.sub1_2}
                sub1_3={value.sub1_3}
                sub2_1={value.sub2_1}
                sub2_2={value.sub2_2}
                sub2_3={value.sub2_3}
                sub3_1={value.sub3_1}
                sub3_2={value.sub3_2}
                sub3_3={value.sub3_3}
                sub4_1={value.sub4_1}
                sub4_2={value.sub4_2}
                sub4_3={value.sub4_3}
                sub5_1={value.sub5_1}
                sub5_2={value.sub5_2}
                sub5_3={value.sub5_3}
                sub6_1={value.sub6_1}
                sub6_2={value.sub6_2}
                sub6_3={value.sub6_3}
                sub7_1={value.sub7_1}
                sub7_2={value.sub7_2}
                sub7_3={value.sub7_3}
                desc1_1={value.desc1_1}
                desc1_2={value.desc1_2}
                desc1_3={value.desc1_3}
                desc2_1={value.desc2_1}
                desc2_2={value.desc2_2}
                desc2_3={value.desc2_3}
                desc3_1={value.desc3_1}
                desc3_2={value.desc3_2}
                desc3_3={value.desc3_3}
                desc4_1={value.desc4_1}
                desc4_2={value.desc4_2}
                desc4_3={value.desc4_3}
                desc5_1={value.desc5_1}
                desc5_2={value.desc5_2}
                desc5_3={value.desc5_3}
                desc6_1={value.desc6_1}
                desc6_2={value.desc6_2}
                desc6_3={value.desc6_3}
                desc7_1={value.desc7_1}
                desc7_2={value.desc7_2}
                desc7_3={value.desc7_3}
              />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
