import React from "react";
import graph from "../assets/images/Graph.png";

function Charts() {
  const shadow = {
    boxShadow:
      "1px 10px 10px rgba(102, 62, 51, 0.02), 10px 20px 20px rgba(102, 62, 51, 0.04), 20px 30px 30px rgba(102, 62, 51, 0.06), 55px 65px 44px rgba(197, 104, 78, 0.13)",
  };

  return (
    <div
      id="charts-container"
      className="mx-auto mt-16 w-[303px] rounded-3xl bg-white py-px lg:mt-12"
      style={shadow}
    >
      <div id="graph-container" className="mx-[30px] mt-[33px]">
        <img src={graph} alt="graph" />
      </div>
      <div
        id="graph-info"
        className="mx-[30px] my-2 flex items-start justify-between pb-4"
      >
        <div id="number">
          <h1 className="text-2xl font-semibold">18,254</h1>
          <p className="text-sm font-normal text-[#AFAFBD]">Sales this year</p>
        </div>
        <div id="indicator" className="flex items-center gap-1">
          <p className="text-base font-semibold text-[#FE805C]">2.5%</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.2}
            stroke="#FE805C"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Charts;
