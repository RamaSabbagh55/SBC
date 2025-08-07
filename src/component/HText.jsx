import React from "react";

export default function Htext({ title ,  }) {
  return (
    <h2
      className="  text-3xl font-bold text-green-900  text-center mb-10  "
      style={{ color: "var(--primaryColor--)" }}
    >
      {title}
    </h2>
  );
}
