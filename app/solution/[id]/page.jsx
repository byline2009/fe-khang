/* eslint-disable react/display-name */
import React from "react";
import SolutionDetailClient from "../../components/slick/SolutionDetailClient";

export default async function SolutionDetail({ params }) {
  const { id } = params;
  return (
    <div className="content-page">
      <SolutionDetailClient />
    </div>
  );
}
