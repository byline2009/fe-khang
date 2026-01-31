"use client";
import clsx from "clsx";
import { useState } from "react";
import "./test.scss";

// components/Test.tsx

export default function Test() {
    const tabs = [{ label: "hinh 1" }, { label: "hinh 2" }, { label: "hinh 3" }];
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div className="tabs-container">

            <img
                src={`/imgs/about-us/leader-1.jpg`}
                className={clsx("tab-item", {
                    active: activeIndex === 1,
                })}
            >
            </img>
            <img
                src={`/imgs/about-us/leader-2.jpg`}
                className={clsx("tab-item", {
                    active: activeIndex === 2,
                })}
            >
            </img>
            <img
                src={`/imgs/about-us/leader-3.jpg`}
                className={clsx("tab-item", {
                    active: activeIndex === 3,
                })}
            >
            </img>


            <button onClick={() => { setActiveIndex(pre => pre + 1) }}>Click mee</button>
        </div>
    )
}
