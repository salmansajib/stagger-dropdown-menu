import Link from "next/link";
import { motion } from "motion/react";

const linkVarients = {
  initial: {
    y: 200,
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

function MobileNavLink({ title, href }) {
  return (
    <motion.div
      variants={linkVarients}
      className="font-lora text-4xl uppercase"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}

export default MobileNavLink;
