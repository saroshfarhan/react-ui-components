import React from "react";
import profile from "../assets/images/profile.png";

function Profile() {
  const shadow = {
    boxShadow:
      "1px 10px 10px rgba(102, 62, 51, 0.02), 10px 20px 20px rgba(102, 62, 51, 0.04), 20px 30px 30px rgba(102, 62, 51, 0.06), 55px 65px 44px rgba(197, 104, 78, 0.13)",
  };

  return (
    <div
      id="profile-container"
      className="mx-auto h-[496px] w-[375px] rounded-3xl bg-white py-px"
      style={shadow}
    >
      <div
        id="profile-picture"
        className="mx-auto mt-8 h-[232px] w-[232px] object-contain"
      >
        <img
          src={profile}
          alt="profile picture"
          className="shrink-0 grow-0 rounded-full"
        />
      </div>
      <div
        id="profile-details"
        className="mt-6 px-8 text-center tracking-[0.25px]"
      >
        <h1 className="text-2xl font-semibold">Alina Smith</h1>
        <p className="mt-4 text-sm font-normal text-[#AFAFBD]">
          Hi, I am Alina. I am a UX/UI web and mobile designer with over 6 years
          of exp. in helping brands make it big.
        </p>
        <button
          type="button"
          className="mt-7 h-[40] w-[142px] rounded-3xl bg-[#FE805C] px-4 py-3 text-sm font-bold tracking-[0.25px] text-white hover:bg-[#FE6034]"
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default Profile;
