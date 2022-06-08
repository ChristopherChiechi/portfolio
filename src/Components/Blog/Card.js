import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='blog-img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.name}</span>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.subtitle}</h2>
          {/*
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
          */}
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal modal-blog'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            {/*
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            */}
            <div className='modal-text right'>
              <span>{props.name}</span>
              <h1>{props.subtitle}</h1>

              <h1>{props.title1}</h1>
              <h2>{props.sub1_1}</h2>
              <p>{props.desc1_1}</p>
              <h2>{props.sub1_2}</h2>
              <p>{props.desc1_2}</p>
              <h2>{props.sub1_3}</h2>
              <p>{props.desc1_3}</p>

              <h1>{props.title2}</h1>
              <h2>{props.sub2_1}</h2>
              <p>{props.desc2_1}</p>
              <h2>{props.sub2_2}</h2>
              <p>{props.desc2_2}</p>
              <h2>{props.sub2_3}</h2>
              <p>{props.desc2_3}</p>
              
              <h1>{props.title3}</h1>
              <h2>{props.sub3_1}</h2>
              <p>{props.desc3_1}</p>
              <h2>{props.sub3_2}</h2>
              <p>{props.desc3_2}</p>
              <h2>{props.sub3_3}</h2>
              <p>{props.desc3_3}</p>

              <h1>{props.title4}</h1>
              <h2>{props.sub4_1}</h2>
              <p>{props.desc4_1}</p>
              <h2>{props.sub4_2}</h2>
              <p>{props.desc4_2}</p>
              <h2>{props.sub4_3}</h2>
              <p>{props.desc4_3}</p>

              <h1>{props.title5}</h1>
              <h2>{props.sub5_1}</h2>
              <p>{props.desc5_1}</p>
              <h2>{props.sub5_2}</h2>
              <p>{props.desc5_2}</p>
              <h2>{props.sub5_3}</h2>
              <p>{props.desc5_3}</p>

              <h1>{props.title6}</h1>
              <h2>{props.sub6_1}</h2>
              <p>{props.desc6_1}</p>
              <h2>{props.sub6_2}</h2>
              <p>{props.desc6_2}</p>
              <h2>{props.sub6_3}</h2>
              <p>{props.desc6_3}</p>

              <h1>{props.title7}</h1>
              <h2>{props.sub7_1}</h2>
              <p>{props.desc7_1}</p>
              <h2>{props.sub7_2}</h2>
              <p>{props.desc7_2}</p>
              <h2>{props.sub7_3}</h2>
              <p>{props.desc7_3}</p>

              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
