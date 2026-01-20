/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Home() {
  const [dataSolutions, setDataSolutions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getApi = async () => {
    setLoading(true);
    const result = await fetch("http://170.64.179.146:8060/api/job/solutions");
    const res = await result.json();
    console.log("solutions", res);
    setDataSolutions(res ?? []);
    setLoading(false);
  };

  useEffect(() => {
    getApi();
  }, []);
  useEffect(() => {
    console.log("check", dataSolutions.length);
  }, [dataSolutions]);

  return (
    <div className="content-page">
      <div className="banner-home">
        <Image
          src="/banners/section_hero-image-3.jpg"
          alt="banner cho hero section"
          fill
        />
        <div className="caption-home">
          <h1>Phục vụ mọi nhu cầu của bạn về bất động sản</h1>
          <p>
            Cung cấp dịch vụ tìm kiếm, mua bán, cho thuê, đầu tư để giúp bạn
            kiến tạo thành công trong sự nghiệp và cuộc sống.
          </p>
          <a href="" className="btn btn-ghost">
            Lien he ngay
          </a>
        </div>
      </div>

      <div className="home-project">
        <div className="container">
          <h1>Solution outstanding</h1>
          <p>Tổng hợp thông tin của các solution tiềm năng</p>
          {dataSolutions.length > 4 ? (
            <div className="row">
              <div className="col-md-12">
                <div className="project-top">
                  <div className="project-thumb-top">
                    <img
                      src={
                        dataSolutions[0].imageUrl ??
                        "/solutions/job-solution.png"
                      }
                      alt="thumbnail"
                    />
                  </div>
                  <div className="project-content">
                    <h3 className="solution-name">
                      {dataSolutions[0].solutionName ?? ""}{" "}
                    </h3>
                    <p className="solution-des">
                      {dataSolutions[0].description ?? ""}
                    </p>
                    <p>
                      <label className="me-2" htmlFor="price">
                        Price:{" "}
                      </label>
                      <span className="price">
                        <b>{dataSolutions[0].price ?? ""}</b>
                      </span>
                      <i className="fa-solid fa-dollar-sign"></i>
                    </p>
                    <p>
                      <label className="me-2" htmlFor="price">
                        Sold:{" "}
                      </label>
                      <span className="price">
                        <b>{dataSolutions[0].processedNumber ?? ""}</b>
                      </span>
                    </p>
                    <p>
                      <label className="me-2" htmlFor="price">
                        Provider:{" "}
                      </label>
                      <span className="price">
                        <b>Unknown</b>
                      </span>
                    </p>
                    <div className="category-tags">
                      {dataSolutions[0].categories?.map((object, index) => (
                        <div className="tag" key={index}>
                          {object.categoryName}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="col-lg-4 col-md-6 col-xs-12">
                  <Link
                    className="solution-item"
                    href={`/du-an/${dataSolutions[i].solutionId}`}
                  >
                    <div className="solution-thumb">
                      <img
                        src={
                          dataSolutions[i].imageUrl ??
                          "/solutions/job-solution.png"
                        }
                        alt="solution-logo"
                      />
                    </div>
                    <div className="solution-content">
                      <h3 className="solution-name">
                        {dataSolutions[i].solutionName ?? ""}{" "}
                      </h3>
                      <p className="solution-des">
                        {dataSolutions[i].description ?? ""}
                      </p>
                      <p>
                        <label className="me-2" htmlFor="price">
                          Price:{" "}
                        </label>
                        <span className="price">
                          <b>{dataSolutions[i].price ?? ""}</b>
                        </span>
                        <i className="fa-solid fa-dollar-sign"></i>
                      </p>
                      <p>
                        <label className="me-2" htmlFor="price">
                          Sold:{" "}
                        </label>
                        <span className="price">
                          <b>{dataSolutions[i].processedNumber ?? ""}</b>
                        </span>
                      </p>
                      <p>
                        <label className="me-2" htmlFor="price">
                          Provider:{" "}
                        </label>
                        <span className="price">
                          <b>Unknown</b>
                        </span>
                      </p>
                      <div className="category-tags">
                        {dataSolutions[i].categories?.map((object, index) => (
                          <div className="tag" key={index}>
                            {object.categoryName}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
