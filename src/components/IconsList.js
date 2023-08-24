import React from "react";

const IconsList = ({ data }) => {
  return (
    <div className="icons-list">
      <div className="icons-box">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(data.mainImg)}`}
          alt={data.title}
          className="icons-svg"
        ></img>
        <div className="icons-title">{data.title} </div>
      </div>
    </div>
  );
};

export default IconsList;
