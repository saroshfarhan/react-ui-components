import React from "react";

function NewCard() {
  const shadow = {
    boxShadow:
      "1px 10px 10px rgba(102, 62, 51, 0.02), 10px 20px 20px rgba(102, 62, 51, 0.04), 20px 30px 30px rgba(102, 62, 51, 0.06), 55px 65px 44px rgba(197, 104, 78, 0.13)",
  };

  return (
    <>
      <div
        id="new-card-light-container"
        className="mx-auto h-[301px] w-[262px] rounded-3xl bg-white py-px"
        style={shadow}
      >
        <div
          id="add-button"
          className="mx-[81px] mt-[46px] flex h-[100px] w-[100px] rounded-full bg-[#FEF2EE] hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#FE805C"
            className="mx-auto my-auto h-9 w-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <div id="text" className="mx-[20px] my-auto">
          <h1 className="mt-[30px] text-center text-lg font-semibold tracking-[.25px] text-[#12121F]">
            Write New Card
          </h1>
          <p className=" mt-3 text-center text-sm text-[#AFAFBD]">
            Your entire product design workflow — connected
          </p>
        </div>
      </div>

      {/* Base card componnt */}
      <div
        id="new-card-container"
        className="mx-auto my-16 h-[301px] w-[262px] rounded-3xl bg-[#4643D3] py-px"
      >
        <div
          id="add-button"
          className="mx-[81px] mt-[46px] flex h-[100px] w-[100px] rounded-full bg-[#5856D7] hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#FFFFFF"
            className="mx-auto my-auto h-9 w-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <div id="text" className="mx-[20px] my-auto text-white">
          <h1 className="mt-[30px] text-center text-lg font-semibold tracking-[.25px]">
            Write New Card
          </h1>
          <p className=" mt-3 text-center text-sm opacity-50">
            Your entire product design workflow — connected
          </p>
        </div>
      </div>
    </>
  );
}

export default NewCard;
