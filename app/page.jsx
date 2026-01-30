/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { redirect } from "next/navigation";
import { makeRequestNoAuth } from "@/helpers/axios";
export default function Home() {
  const [dataSolutions, setDataSolutions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState();
  const [user, setUser] = useState({});

  const getApi = async () => {
    setLoading(true);
    const result = await makeRequestNoAuth({
      url: "http://170.64.179.146:8060/api/job/solutions",
    });
    console.log("solutions", result);
    setDataSolutions(result.data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    getApi();
    // login();
  }, []);
  useEffect(() => {
    console.log("check", dataSolutions.length);
  }, [dataSolutions]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");

    if (token) {
      setAccessToken(token);
    }

    if (user) {
      setUser(JSON.parse(user));
    }
    if (!token) {
      redirect("/login");
    }
  }, []);

  // const login = () => {
  //   fetch("https://api.escuelajs.co/api/v1/auth/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: "john@mail.com",
  //       password: "changeme",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then(console.log);
  // };

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
                    href={`/solution/${dataSolutions[i].solutionId}`}
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
