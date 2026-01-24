'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./slick-solution.scss";
import Image from "next/image";


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
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true, // Enable automatic transition
        autoplaySpeed: 2000 // Delay in milliseconds between slides
    };
    return (
        <div className="container mx-auto">
            <div className="slider-container ">
                <Slider {...settings}>
                    {

                        imgs.map((url) => (<div className="img-wrapper" key={url}>
                            <Image src={url} alt="" fill />
                        </div>))
                    }

                </Slider>
            </div>


        </div>

    );
}
