"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const [count, setCount] = useState(1);
  const [sum, setSum] = useState(1);
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await fetch("/api/job/solution/2");
    const data = await result.json();
    console.log("data", data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      {/* <ul>
        {data.map((object, i) => (
          <li key={i}>{object.username}</li>
        ))}
      </ul> */}

      {/* <div className="bg-blue-500 text-white p-4">Nền xanh chữ trắng</div>
      <div className="text-red-600">Chữ màu đỏ</div>
      <div className="bg-green-200">Nền xanh nhạt</div> */}
      <button className="btn"> Click mee</button>
    </>
  );
}
