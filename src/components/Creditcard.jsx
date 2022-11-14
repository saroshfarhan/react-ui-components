import React from "react";
import visa from "../assets/images/visa.png";

function Creditcard() {
  return (
    <div
      id="creditcard-main-container"
      className="mx-auto mt-16 w-[297px] lg:my-auto"
    >
      <div id="credit-card-info" className=" rounded-3xl bg-[#FE805C] py-px">
        <div id="user-details" className="mx-6 mt-6">
          <h1 id="name-on-card" className="text-lg font-semibold text-white">
            Andrew Mamontov
          </h1>
          <p
            id="card-info"
            className="mt-1 text-[17px] font-normal text-white opacity-50"
          >
            **** **** 6162
          </p>
        </div>
        <div
          id="brand-info"
          className="mx-6 mt-4 flex items-center justify-between pb-4"
        >
          <p className="text-[17px] font-semibold text-white">09 / 21</p>
          <img src={visa} alt="Visa" className="h-14 w-14 shrink-0 grow-0" />
        </div>
      </div>
      <div
        id="add-new-div"
        className="my-4 flex h-12 items-center justify-start gap-7 rounded-3xl bg-white hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#000000"
          className="ml-7 h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <a href="#" className="text-base font-semibold text-black">
          Add credit card
        </a>
      </div>
    </div>
  );
}

export default Creditcard;
