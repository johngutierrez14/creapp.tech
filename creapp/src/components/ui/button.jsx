import React from "react";
import * as motion from "motion/react-client";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <motion.button
      {...props}
      whileHover={{ scale: 1.1, backgroundColor: "rgba(30, 64, 175, 1)" }} // escala + color al hover
      whileTap={{ scale: 0.95, backgroundColor: "rgba(59, 130, 246, 1)" }}  // escala - color al tap
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`inline-flex items-center justify-center rounded-lg bg-blue-700 px-6 py-2 text-white font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
    >
      {children}
    </motion.button>
  );
};
