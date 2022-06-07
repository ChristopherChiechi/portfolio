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

              <h1>{props.title_1}</h1>
              <h2>{props.sub_1}</h2>
              <p>{props.desc_1}</p>

              <h1>{props.title_2}</h1>
              <h2>{props.sub_2}</h2>
              <p>{props.desc_2}</p>

              <h1>{props.title_3}</h1>
              <h2>{props.sub_3}</h2>
              <p>{props.desc_3}</p>

              <h1>{props.title_4}</h1>
              <h2>{props.sub_4}</h2>
              <p>{props.desc_4}</p>
              

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
