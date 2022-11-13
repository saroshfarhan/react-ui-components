import React from "react";
import profile from "../assets/images/profilePic.png";

function Chat() {
  return (
    <div id="chats-content" className="mx-auto h-auto w-[375px] rounded-3xl">
      <div id="profile-details" className="rounded-t-3xl bg-[#4643D3]">
        <div id="profile" className="flex py-[22px] px-[32px]">
          <img
            //  src="https://thispersondoesnotexist.com/image"
            src={profile}
            alt="profile picture"
            className="h-12 w-12 shrink-0 grow-0 rounded-full"
          />
          <div id="designation">
            <h3 className="mx-[15px] text-lg font-semibold tracking-[.25px] text-white">
              Emily Dougrer
            </h3>
            <p className="mx-[15px] text-sm font-normal text-white opacity-50">
              Developer
            </p>
          </div>
          <div
            id="close-icon"
            className="mx-auto mr-0 h-6 w-6 hover:cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-white opacity-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <p className=" px-[32px] pb-[22px] text-base font-normal text-white">
          Hi there. 👋 We use Boards to share initial goals and ideas.
        </p>
      </div>
      <div className="flex h-[58px] justify-between rounded-b-3xl bg-white">
        <input
          type="text"
          placeholder="Type your message..."
          className="ml-[32px] focus:outline-none"
        />
        <a
          href="#"
          className="my-[16px] mr-[32px] text-right text-base font-semibold text-[#5856D7] hover:cursor-pointer"
        >
          Send
        </a>
      </div>
    </div>
  );
}

export default Chat;
