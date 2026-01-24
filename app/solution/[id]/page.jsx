/* eslint-disable react/display-name */
import React from "react";
// import SolutionDetailClient from "../../components/slick/SolutionDetailClient";
import SlidePartner from "../../components/SlidePartner/index";
export default async function SolutionDetail({ params }) {
  const { id } = await params;
  return (
    <div className="content-page">
      {/* <SolutionDetailClient /> */}
      <SlidePartner />
    </div>
  );
}
