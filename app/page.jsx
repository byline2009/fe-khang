"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const [count, setCount] = useState(1);
  const [sum, setSum] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const result = await fetch("/api/job/solution/2");
      const data = await result.json();
      console.log("data", data);
    };
    getApi();
  }, []);

  return (
    <>
      {/* <ul>
        {data.map((object, i) => (
          <li key={i}>{object.username}</li>
        ))}
      </ul> */}
    </>
  );
}
