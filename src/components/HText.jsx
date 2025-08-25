import React from "react";
import { motion as Motion } from "motion/react";

export default function Htext({ title }) {
  return (
    <Motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="  text-3xl font-bold  text-center mb-10  "
      style={{ color: "var(--primaryColor--)" }}
    >
      {title}
    </Motion.h2>
  );
}
