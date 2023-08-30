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
