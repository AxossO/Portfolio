import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fromZeroToHero, iconLineAnimate } from "../animation";

const IconsList = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "1px 0px 0px 0px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={fromZeroToHero}
      className="icons-list"
    >
      <motion.div className="shadow-2xl  relative">
        <motion.div
          variants={iconLineAnimate}
          className="w-1 h-1 bg-mainTextColor left-1/2 absolute block"
        ></motion.div>
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(data.mainImg)}`}
          alt={data.title}
          className="h-[13vh]  w-full my-2 mx-0"
        ></img>
        <div className="icons-title">{data.title} </div>
      </motion.div>
    </motion.div>
  );
};

export default IconsList;
