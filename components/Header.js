"use client";

import { useState } from "react";
import { AnimatePresence, delay, motion } from "motion/react";
import MobileNavLink from "./MobileNavLink";

const navLinks = [
  { title: "What we do", href: "#" },
  { title: "How it works", href: "#" },
  { title: "Case studies", href: "#" },
  { title: "About", href: "#" },
  { title: "Contact", href: "#" },
];

const menuVarients = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      diration: 0.7,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      diration: 0.6,
      delay: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linkContainerVarients = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="flex items-center justify-between px-2 py-8 lg:py-4 container mx-auto">
        <div className="flex items-center gap-[1ch]">
          <div className="size-5 rounded-full bg-lime-300" />
          <span className="uppercase">portfolio</span>
        </div>
        <button
          onClick={toggleMenu}
          className="capitalize hover:text-green-800"
        >
          menu
        </button>
      </nav>

      {/* mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVarients}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full min-h-svh origin-top bg-lime-300 text-zinc-950 p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between">
                <h1 className="text-lg text-zinc-950 capitalize">portfolio</h1>
                <button
                  onClick={toggleMenu}
                  className="text-zinc-950 capitalize hover:text-red-500"
                >
                  close
                </button>
              </div>
              {/* mobile nav links */}
              <motion.div
                variants={linkContainerVarients}
                initial="initial"
                animate="animate"
                exit="initial"
                className="min-h-svh flex flex-col gap-2 items-center justify-center"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div key={index} className=" overflow-hidden">
                      <MobileNavLink title={link.title} href={link.href} />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
