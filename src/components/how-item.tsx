import { motion } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from 'next/image';
import clip from '/public/clip.svg';

interface HowItemProps {

    icon: string | StaticImport;
    title: string;
    description: string;
    iconAlt: string;

}

export default function HowItem({icon, title, description, iconAlt}: HowItemProps) {


    return (
        <motion.div className="flex flex-col gap-5 items-center justify-center px-6 rounded-md hover:shadow-xl hover:scale-110 delay-200 duration-200 ease-in-out">
            <Image src={icon} alt={iconAlt}/>
            <h4 className="text-lg text-[#1B233D]">{title}</h4>
            <p className="text-slate-400 text-md text-center">{description}</p>
            <Image src={clip} alt="clip" />

        </motion.div>
    )
}