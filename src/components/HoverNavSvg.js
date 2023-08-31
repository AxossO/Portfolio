import React, { useState } from "react";
import { motion } from "framer-motion";
export const HoverNavSvg = ({ children }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={isHovered ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export const Letter = ({ children }) => {
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <span
      className={hovered ? "text-animate-hover" : ""}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {children}
    </span>
  );
};
