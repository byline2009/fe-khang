"use client";
import React from 'react';

import Slider from 'react-slick';
const SlidePartner = () => {
  const partnerImg = [
    '/list-partner/1.Phat-Dat.webp',
    '/list-partner/2.Danh-Khoi.webp',
    '/list-partner/3.DKRA.webp',
    '/list-partner/4.Sai-Gon-Thang-Long-Group.webp',
    '/list-partner/5.Home-Next.webp',
    '/list-partner/6.Azrealty.webp',
    '/list-partner/7.PRE-Premium.webp',
    '/list-partner/9.Capella-Holding.webp',
    '/list-partner/11.Van-Hanh-Phat.webp',
    '/list-partner/12.GP-Land.webp',
    '/list-partner/13.Ngoi-nha-xanh.webp',
    '/list-partner/14.NMH.webp',
    '/list-partner/15.An-Phuc-Dien.webp',
    '/list-partner/16.Thu-Thiem-Group.webp',
    '/list-partner/17.Giai-phap-An-Gia.webp',
    '/list-partner/18.Nozomi.webp',
    '/list-partner/19.HTC-Sai-Gon.webp',
    '/list-partner/20.Payoo.webp',
    '/list-partner/21.Momo.webp',
    '/list-partner/22.Moca-Grab.webp',
    '/list-partner/23.Viettel-Pay.webp',
    '/list-partner/24.Zalo-Pay.webp',
    '/list-partner/25.Elsa.webp',
    '/list-partner/26.bTaskee.webp',
    '/list-partner/27.Phano.webp',
    '/list-partner/28.VNU-HCM.webp',
    '/list-partner/29.Casso.webp',
    '/list-partner/30.ITP.webp',
  ]

  const settingPartner = {
    className: 'slide-partner',
    dots: false,
    dotsClass: 'slick-dots slick-partner',
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    rows: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="container mx-auto  overflow-hidden">
      <div className="slide-container ">
        <Slider {...settingPartner}>
          {partnerImg.map((item: string) => (
            <div key={item}>
              <div className="thumb-partner">
                <img src={item} alt="partner 1" />
              </div>

            </div>
          ))}
        </Slider>
      </div>

    </div>
  )
}
export default SlidePartner
