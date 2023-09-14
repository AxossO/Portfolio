import React from "react";

const DarkMode = ({ dark, setDark, setTurnOn, turnOn }) => {
  const clickHandler = () => {
    setDark(!dark);
  };
  const onHandler = () => {
    setTurnOn(!turnOn);
  };
  return (
    <div className="absolute top-0 right-0 md:right-1/2 cursor-pointer ">
      <button
        id="menu-btn"
        class=" -left-12 cursor-pointer relative md:hidden focus:outline-none hamburger bg-white text-cyan-50"
        onClick={onHandler}
      >
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
      <div className="sun"></div>
      <div onClick={clickHandler} className="moon">
        <svg
          className="bg-[#00c3f5]"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transform: "rotate(40deg)" }}
        >
          <mask id="mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <circle cx="12" cy="4" r="9" fill="black" />
          </mask>
          <circle fill="black" cx="12" cy="12" r="9" mask="url(#mask)" />
        </svg>
      </div>
    </div>
  );
};

export default DarkMode;
