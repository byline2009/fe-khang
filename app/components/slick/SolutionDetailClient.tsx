'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./slick-solution.scss"


const imgs = [
    "/slides/hinh1.jpg",
    "/slides/hinh2.jpg",
    "/slides/hinh3.jpg",
    "/slides/hinh4.jpg",
    "/slides/hinh5.jpg",
]

export default function SolutionDetailClient({ id }: { id: string }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };
    return (

        <div className="slider-container">
            <Slider {...settings}>
                {
                    imgs.map((url) => (<div key={url}>
                        <img src={url} alt="" />
                    </div>))
                }

            </Slider>
        </div>

    );
}
