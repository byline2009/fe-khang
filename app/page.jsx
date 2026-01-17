/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getApi = async () => {
    setLoading(true);
    const result = await fetch(
      "https://houze-portal-api.houze.io/portal/project-developers?limit=12"
    );
    const dataProject = await result.json();
    console.log("dataProject", dataProject);
    setData(dataProject.results ?? []);
    setLoading(false);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="content-page">
      {/* {!loading && data && data.length > 0 ? (
        <>
          {data.map((object, i) => (
            <div key={i}>
              <p>{object.name ?? ""}</p>
            </div>
          ))}
        </>
      ) : (
        <></>
      )} */}
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
          <h1>Dự án mới nổi bật</h1>
          <p>
            Tổng hợp thông tin của các dự án đáng sống và tiềm năng sinh lời cao
          </p>
          <div className="row">
            <div className="col-md-12">
              <div className="project-top">
                <div className="project-thumb-top">
                  <img src="/projects/project-thumb-1.png" alt="thumbnail" />
                </div>
                <div className="project-content">
                  <p className="project-status comming-status">
                    Sắp mở bán <small>Ngày mở bán dự kiến: 21/12/2025</small>
                  </p>
                  <h3>The Ápira </h3>
                  <p className="project-location">
                    Phường Tân Đông Hiệp, Thành phố Dĩ An, Bình Dương
                  </p>
                  <p className="style-apartment-type">
                    <b>38tr/m2</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
