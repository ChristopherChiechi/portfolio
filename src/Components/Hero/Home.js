import React from "react"
import "./Home.css"
//import hero from "../Images/bodyshot1.png"
import hero from "../Images/bodyshot.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h2>
              Hi, I’m <span>Christopher Chiechi</span>
            </h2>
            <h2>
              a
              <span>
                <Typewriter words={[" Game Developer.", " Software Developer."," Honors Graduate."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
            <p>
              I graduated magna cum laude from the University of North Texas with a Bachelor of Science in Computer Science and a Certificate in Game Programming.
              I am proficient in C++ and object-oriented programming. C/C++ was used for nearly all of my programming courses. Below you can find some of my projects,
              many of which are video games. I find the medium of video games to be the most exciting, as they are varied, complex, and have the ability to not only entertain
              but also to provide training and research.
            </p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>Socials</h4>
                <div className='button'>
                  <button
                    className='btn_shadow'
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        'https://github.com/ChristopherChiechi', '_blank' // open link in new window
                      );
                      }}
                    > 
                    <i class="devicon-github-original"></i>
                  </button>
                  <button 
                    className='btn_shadow'
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        'https://www.linkedin.com/in/christopher-chiechi-0a023023b/', '_blank');
                      }}
                    >
                    <i class="devicon-linkedin-plain"></i>
                  </button>
                  <button
                    className='btn_shadow'
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        'https://christopher-chiechi.itch.io/', '_blank');
                      }}
                    >
                    <i class="fab fa-itch-io"></i>
                  </button>
                </div>
              </div>

              <div className='col_1'>
                <h4>Most Experience</h4>
                <button 
                  className='btn_shadow'
                  type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://en.cppreference.com/w/', '_blank');
                      }}
                  >
                  <i class="devicon-cplusplus-plain"></i>
                </button>
                <button
                  className='btn_shadow'
                  type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://unity.com/', '_blank');
                      }}
                  >
                  <i class="devicon-unity-original"></i>
                </button>
                <button
                  className='btn_shadow'
                  type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://www.unrealengine.com/en-US', '_blank');
                      }}
                  >
                  <i class="devicon-unrealengine-original"></i>
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
