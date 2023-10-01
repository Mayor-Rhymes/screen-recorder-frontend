import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface FeatureProps {

    icon: string | StaticImport;
    title: string;
    description: string;
    imageAlt: string;
}


export default function FeatureItem({icon, title, description, imageAlt}: FeatureProps) {

    return (
        <motion.div className="flex space-between gap-5">
            <Image src={icon} alt={imageAlt} />

            <motion.div className="flex flex-col">
                <h4 className="text-[#1B233D] text-2xl font-[600]">{title}</h4>

                <p className="text-md text-gray-400 whitespace-normal">{description}</p>
            </motion.div>

        </motion.div>
    )
}