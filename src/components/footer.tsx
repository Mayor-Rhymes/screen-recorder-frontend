import { motion } from "framer-motion";
import Image from "next/image";
import logoFooter from "/public/logo-footer.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, translateY: 10 }}
      //   animate={{ translateY: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
      viewport={{ once: false }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 4,
      }}
      className="bg-[#120B48] h-[347px] flex justify-evenly items-center px-10"
    >
      <motion.div className="flex items-center gap-4">
        <Image src={logoFooter} alt="logo" />
        <Link href="/" className="text-[16px] font-[700] text-white">
          HelpMeOut
        </Link>
      </motion.div>

      <motion.div className="flex flex-col gap-5 text-white">
        <Link href="/" className="font-bold">
          Menu
        </Link>
        <Link href="/">Home</Link>
        <Link href="/">Converter</Link>
        <Link href="/">How it works</Link>
      </motion.div>

      <motion.div className="flex flex-col gap-5 text-white">
        <Link href="/" className="font-bold">
          About us
        </Link>
        <Link href="/">About</Link>
        <Link href="/">Contact us</Link>
        <Link href="/">Privacy Policy</Link>
      </motion.div>

      <motion.div className="flex flex-col gap-5 text-white">
        <Link href="/" className="font-bold">
          Screen Record
        </Link>
        <Link href="/">Browser Window</Link>
        <Link href="/">Desktop</Link>
        <Link href="/">Application</Link>
      </motion.div>
    </motion.div>
  );
}
