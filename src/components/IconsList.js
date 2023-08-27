import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { iconLineAnimate } from "../animation";

const IconsList = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "1px 0px 0px 0px" });
  return (
    <motion.div className="icons-list">
      <motion.div className="icons-box">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={iconLineAnimate}
          className="icons-line"
        ></motion.div>
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(data.mainImg)}`}
          alt={data.title}
          className="icons-svg"
        ></img>
        <div className="icons-title">{data.title} </div>
      </motion.div>
    </motion.div>
  );
};

export default IconsList;
