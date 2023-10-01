import { motion } from "framer-motion";
import HowItem from "./how-item";
import one from "/public/one.svg";
import two from "/public/two.svg";
import three from "/public/three.svg";

export default function HowItWorks() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, translateY: -10, translateX: -5 }}
      whileInView={{ opacity: 1, scale: 1, translateY: 0, translateX: 0 }}
      viewport={{ once: false }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 4,
      }}
      className="py-20 flex flex-col gap-10"
    >
      <h4 className="text-[#141414] text-2xl font-[700] text-center">
        How it works
      </h4>
      <motion.div className="flex justify-center gap-10 px-10">
        <HowItem
          icon={one}
          title="Record Screen"
          description="Click the Start Recording button in our extension.  choose which part of your screen to capture and who you want to send it to."
          iconAlt="one icon"
        />
        <HowItem
          icon={two}
          title="Share Your Recording"
          description="We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform."
          iconAlt="two icon"
        />
        <HowItem
          icon={three}
          title="Learn Effortlessly"
          description="Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone."
          iconAlt="three icon"
        />
      </motion.div>
    </motion.div>
  );
}
