"use client";

import { motion, type MotionProps } from "framer-motion";

type AnimatedDivProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
};

export const AnimatedDiv = ({ children, className, ...props }: AnimatedDivProps) => {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
};
