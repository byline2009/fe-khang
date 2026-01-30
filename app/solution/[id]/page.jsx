import React from "react";
import SolutionDetailClient from "../../components/slick/SolutionDetailClient";
import SlidePartner from "../../components/SlidePartner/index";
import clsx from "clsx";
import Test from "../../components/Test";
import Lightbox from "../../components/LightBox";

export default async function SolutionDetail({ params }) {
  const { id } = await params;
  
  return (
    <div className="content-page">
      {/* <SolutionDetailClient /> */}
      {/* <SlidePartner /> */}
      {/* <Test /> */}
      <Lightbox
        isOpen={true}
        listImages={[
          "/slides/hinh1.jpg",
          "/slides/hinh2.jpg",
          "/slides/hinh3.jpg",
          "/slides/hinh4.jpg",
          "/slides/hinh5.jpg",
        ]}
        indexImg={2}
      />
    </div>
  );
}
