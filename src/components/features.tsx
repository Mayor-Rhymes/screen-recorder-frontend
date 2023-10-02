import { motion, useScroll, useTransform } from "framer-motion";
import FeatureItem from "./feature-item";
import record from "/public/record.svg";
import send from "/public/send.svg";
import revisit from "/public/revisit.svg";
import vidRepo from "/public/video-repo.png";
import Image from "next/image";

export default function Features() {
  
  return (
    <motion.div
      id="features"
      initial={{ opacity:0, scale: 0, translateY: -10 }}
    //   animate={{ translateY: 0, scale: 1 }}
      whileInView={{opacity: 1, scale: 1, translateY: 0}}
      viewport={{once: false}}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 4,
      }}
      className="flex flex-col gap-20 py-5 bg-white"
    >
      <motion.div className="flex flex-col items-center gap-2">
        <h4 className="text-[#141414] text-2xl font-[700]">Features</h4>
        <p className="text-md text-gray-400">Key Highlights Of Our Extension</p>
      </motion.div>

      <motion.div className="flex flex-col lg:flex-row px-20 gap-10 items-center">
        <motion.div className="flex flex-col gap-10">
          <FeatureItem
            icon={record}
            title="Simple Screen Recording"
            description="Effortless screen recording for everyone. Record with ease, no tech expertise required."
            imageAlt="record icon"
          />
          <FeatureItem
            icon={send}
            title="Easy-to-Share URL"
            description="Share your recordings instantly with a single link. No attachments, no downloads."
            imageAlt="send icon"
          />
          <FeatureItem
            icon={revisit}
            title="Revisit Recordings"
            description="Access and review your past content effortlessly. Your recordings, always at your fingertips."
            imageAlt="revisit icon"
          />
        </motion.div>

        <Image src={vidRepo} alt="hello" />
      </motion.div>
    </motion.div>
  );
}
