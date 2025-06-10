"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const pageVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  in: {
    x: 0,
    opacity: 1,
  },
  out: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
  direction?: number;
};

export default function AuthLayout({
  children,
  direction = 1,
}: AuthLayoutProps) {
  return (
    <motion.div
      custom={direction}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
}
