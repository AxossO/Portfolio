import { useRef, useState } from "react";
import { Element } from "react-scroll";
import { MdLocationPin } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { fade } from "../animation";
const Contact = () => {
  const [thereIs] = useState("");
  const checkHandler = (e) => {
    e.preventDefault();
    if (!thereIs.trim()) {
      return;
    }
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "1px 0px 0px 0px" });
  return (
    <Element name="contacts">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fade}
        className="py-4 px-0 text-center lg:px-20"
      >
        <h2 className="font-Phuda   text-mainTextColor text-6xl font-bold inline border-b-2 border-[#808080]">
          Contact
        </h2>
        <p className="py-6 px-0">
          Submit the form below to get in touch with me
        </p>
        <div className="flex justify-center items-center flex-col relative">
          <div className="absolute">
            <div className="email-address text-[#6f6e6c] font-Roboto">
              Email ahmadsayed142d@gmail.com
            </div>
            <br />
            <div className="phone text-[#6f6e6c] font-Roboto ">
              Phone +0200101645177
            </div>
            <br />
            <div className="location text-[#6f6e6c] font-Roboto flex flex-row items-center justify-center ">
              Egypt Cairo <MdLocationPin />
            </div>
          </div>
          <form
            className="flex flex-col w-full max-w-xs lg:w-1/2 lg:max-w-lg mt-8 h-full "
            onSubmit={checkHandler}
            action="https://getform.io/f/d543f8d8-82c1-4e35-8ed6-1a9807241311"
            method="POST"
          >
            <input
              className="py-2 px-4 bg-transparent border-2 rounded-md text-[#ffffff] outline-none my-2 mx-0"
              type="text"
              name="name"
              placeholder="Enter your name"
            ></input>
            <input
              className="py-2 px-4 bg-transparent border-2 rounded-md text-[#ffffff] outline-none my-2 mx-0"
              type="text"
              name="email"
              placeholder="Enter your email"
            ></input>
            <textarea
              className="py-2 px-4 min-h-[38vh]  bg-transparent border-2 rounded-md focus:outline-none my-2 mx-0"
              name="message"
            ></textarea>
            <button
              type="submit"
              className="font-Adlam bg-mainTextColor border-none   px-6 my-8 mx-auto flex justify-center items-center rounded-xl cursor-pointer transition-all animate-bounce p-4 hover:scale-125"
            >
              Lets talk
            </button>
          </form>
        </div>
      </motion.div>
    </Element>
  );
};

export default Contact;
