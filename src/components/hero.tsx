import { motion } from "framer-motion";
import Image from "next/image";
import granny from "/public/granny.jpg";
import smileyPeople from "/public/smiley-people.jpg";
import girl from "/public/girl.jpg";
import dots from "/public/dots.jpg";
import { ArrowRight } from "lucide-react";
import bluedots from "/public/bluedots.svg";

export default function Hero() {
  return (
    <motion.div
    initial={{ opacity:0, scale: 0, translateY: -10, translateX: -10 }}
    //   animate={{ translateY: 0, scale: 1 }}
      whileInView={{opacity: 1, scale: 1, translateY: 0, translateX: 0}}
      viewport={{once: false}}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 4,
      }}
      className="flex flex-col gap-20 py-10 lg:flex-row lg:h-[777px] items-center px-10 bg-white"
    >
      <motion.div className="flex flex-col items-center lg:items-start px-10 gap-10">
        <motion.div className="flex flex-col">
          <motion.p className="text-3xl lg:text-[64px] font-[700] lg:leading-[64px]">
            Show Them
          </motion.p>
          <motion.p className="text-3xl lg:text-[64px] font-[700] lg:leading-[64px]">
            {"Don't Just Tell"}
          </motion.p>
        </motion.div>

        <motion.p className="whitespace-normal text-center lg:text-start">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </motion.p>

        <motion.button className="h-16 flex items-center justify-evenly w-56 px-5 bg-[#120B48] hover:-translate-y-2 duration-150 delay-150 ease-in-out text-white rounded-md ">
          Install HelpMeOut <ArrowRight />
        </motion.button>
      </motion.div>
      <motion.div className="flex space-between gap-5 relative">
        <motion.div className="flex flex-col gap-5 relative z-20">
          <Image src={bluedots} alt="blue-dots" className="hidden lg:block absolute -bottom-4 z-10 -left-10"/>
          <Image src={granny} alt="granny" className="relative z-20"/>
          <Image src={smileyPeople} alt="smiley-people" className="relative z-20"/>
        </motion.div>
        <Image src={girl} alt={"girl"} className="relative z-20" />
        <Image
          src={dots}
          alt={"dots"}
          className="hidden lg:block absolute -top-20 -right-10 z-10"
        />
      </motion.div>
    </motion.div>
  );
}
