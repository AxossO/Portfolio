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
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
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
