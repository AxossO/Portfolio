export const pageAnimation = {
  hidden: {
    opacity: 0,
    // y: 200,
    x: 3000,
  },
  show: {
    opacity: 1,
    // y: 0,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    // y: 200,
    x: 3000,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const titleAnime = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
export const fade = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

export const lineSkillsAnimate = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.25,
    },
  },
};

export const svgHoverAnimate = {
  hidden: {
    x: -105,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  show: {
    x: -20,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
export const liHoverAnimation = {
  hidden: {
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  show: {
    x: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const projectAnimate = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const cardVariants = {
  hidden: {
    rotateY: 0,
    scale: 1.1,
    transition: { duration: 0.5 },
    zIndex: 10,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },
  show: {
    scale: 1.0,
    rotateY: 360,
    transition: { duration: 0.5 },
    zIndex: 10,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },
};

export const aboutAnime = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const toRight = {
  hidden: {
    opacity: 0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
export const toLeft = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const fromZeroToHero = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};
export const iconLineAnimate = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    width: "100%",
    left: "0%",
    right: "100%",
    transition: {
      duration: 1,
    },
  },
};

export const flip = {
  hidden: {
    rotateY: -90,
    opacity: 1,
  },
  show: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 1,
    },
  },
};
