/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import { arrayDirection } from '@config/constants'
const Lightbox = ({
  isOpen,
  onCloseLB,
  listImages = [],
  indexImg,
  lightBoxType,
}: any) => {
  const [photoIndex, setPhotoIndex] = useState<any>(indexImg)
  const [firstClick, setFirstClick] = useState<boolean>(false)

  const slider = useRef<any>({})
  
  const handleClose = () => {
    setPhotoIndex(indexImg)
    onCloseLB()
  }
  const afterChange = (currentSlide: any) => {
    setPhotoIndex(currentSlide)
  }
  useEffect(() => {
    setPhotoIndex(indexImg)
  }, [indexImg])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', (e: any) => {
        if (e.keyCode === 27) {
          handleClose()
        }
      })
    }
    return () => {
      document.removeEventListener('keydown', () => {})
    }
  })
  useEffect(() => {
    const html = document.getElementsByTagName('html')[0]

    if (isOpen) {
      html.classList.add('lock-scroll')
    } else {
      html.classList.remove('lock-scroll')
    }
    return (): void => {
      html.classList.remove('lock-scroll')
    }
  }, [isOpen])

  const settings = {
    className: 'lightbox-slide',
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: indexImg,
    arrows: false,
  }

  const handleNext = () => {
    if (firstClick) {
      slider.current.slickNext()
      setPhotoIndex((prev: any) => {
        if (prev + 1 === listImages.length) {
          return prev
        }
        return prev + 1
      })
    } else {
      slider.current.slickGoTo(indexImg + 1)
      setPhotoIndex((prev: any) => {
        if (prev + 1 === listImages.length) {
          return prev
        }
        return prev + 1
      })
      setFirstClick(true)
    }
  }

  const handlePrev = () => {
    if (firstClick) {
      slider.current.slickPrev()
      setPhotoIndex((prev: any) => {
        if (prev === 0) {
          return prev
        }
        return prev - 1
      })
    } else {
      slider.current.slickGoTo(indexImg - 1)
      setPhotoIndex((prev: any) => {
        if (prev === 0) {
          return prev
        }
        return prev - 1
      })
      setFirstClick(true)
    }
  }

  const keyControl = (e: any) => {
    if (e.keyCode === 37) {
      handlePrev()
    }
    if (e.keyCode === 39) {
      handleNext()
    }
    if (e.keyCode === 27) {
      handleClose()
    }
  }

  

  return (
    <div className={`light-box ${isOpen && 'show'}`}>
      <div className="hot-line-lb">
        <a href="tel:0886048899">
          <i className="icon-call-connecting"></i>
          <b>0886 048 899</b>
        </a>
      </div>
      <div className="header-lightbox">
        <div className="heading-lb">
          {lightBoxType === 'block'
            ? listImages[photoIndex].name
            : `(${photoIndex + 1} / ${listImages.length})`}
        </div>
        <button
          onClick={() => handleClose()}
          onKeyDown={(e: any) => keyControl(e)}
        >
          <i className="icon-close"></i>
        </button>
      </div>
      <div className="body-lightbox">
        {photoIndex > 0 && (
          <button
            className="btn-lb lb-prev"
            onClick={() => handlePrev()}
            onKeyDown={(e: any) => keyControl(e)}
          >
            <i className="icon-chevron-left"></i>
          </button>
        )}
        {photoIndex + 1 !== listImages.length && (
          <button
            className="btn-lb lb-next"
            onClick={() => handleNext()}
            onKeyDown={(e: any) => keyControl(e)}
          >
            <i className="icon-chevron-right"></i>
          </button>
        )}
        <div className="container container-light-box">
          {listImages.length > 0 && (
            <Slider ref={slider} {...settings} afterChange={afterChange}>
              {listImages.map((item: any) => (
                <div key={item.id}>
                  <div className="carousel-img">
                    {lightBoxType === 'image' && (
                      <img
                        className="d-block"
                        src={item.image}
                        alt={item.name}
                      />
                    )}
                    {lightBoxType === 'apartment' && (
                      <img
                        className="d-block"
                        src={item.renders[0]?.image}
                        alt={item.renders[0]?.name}
                      />
                    )}
                    {lightBoxType === 'block' && (
                      <img
                        className="d-block"
                        src={item.design_album_items[0]?.image}
                        alt={item.design_album_items[0]?.name}
                      />
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
      <div className="footer-lightbox">
        {lightBoxType === 'block' ? (
          <div className="desc-lb">
            {listImages[photoIndex].apartment_count &&
              listImages[photoIndex].apartment_count > 0 &&
              `${listImages[photoIndex].apartment_count} căn hộ •`}{' '}
            {listImages[photoIndex].shophouse_count &&
              listImages[photoIndex].shophouse_count > 0 &&
              `${listImages[photoIndex].shophouse_count} shophouse`}{' '}
            <br />
            {listImages[photoIndex].podium_count &&
              listImages[photoIndex].podium_count > 0 &&
              `${listImages[photoIndex].podium_count} tầng khối đế •`}{' '}
            {listImages[photoIndex].basement_count &&
              listImages[photoIndex].basement_count > 0 &&
              `${listImages[photoIndex].basement_count} tầng hầm •`}{' '}
            {listImages[photoIndex].floor_count &&
              listImages[photoIndex].floor_count > 0 &&
              `${listImages[photoIndex].floor_count} căn mỗi sàn`}{' '}
          </div>
        ) : (
          <>
            <div className="caption-lb">{listImages[photoIndex].name}</div>
            {lightBoxType === 'apartment' && (
              <div className="desc-lb">
                {listImages[photoIndex].bedroom_count &&
                  listImages[photoIndex].bedroom_count > 0 && (
                    <span>{listImages[photoIndex].bedroom_count} PN</span>
                  )}
                {listImages[photoIndex].bathroom_count &&
                  listImages[photoIndex].bathroom_count > 0 && (
                    <span>{listImages[photoIndex].bathroom_count} PT</span>
                  )}
                {listImages[photoIndex].carpet_area &&
                  listImages[photoIndex].carpet_area !== '' &&
                  parseInt(listImages[photoIndex].carpet_area) > 0 && (
                    <span>
                      {listImages[photoIndex].carpet_area} m<sup>2</sup>
                    </span>
                  )}
                {listImages[photoIndex].balcony_direction && (
                  <span>
                    {
                      arrayDirection.find(
                        it =>
                          it.value === listImages[photoIndex].balcony_direction
                      ).label
                    }
                  </span>
                )}
              </div>
            )}
          </>
        )}
        {/* <div className="desc-lb">1 PN • 1 PT • 37m² • Đông Nam</div> */}
      </div>
    </div>
  )
}
export default Lightbox
