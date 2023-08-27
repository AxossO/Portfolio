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

export const iconLineAnimate = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
  show: {
    opacity: 1,
    width: "100%",
    left: "0%",
    right: "100%",
    transition: {
      duration: 1,
    },
  },
};
