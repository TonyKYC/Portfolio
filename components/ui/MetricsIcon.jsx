import React from "react";

const MetricsIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 mx-auto mb-4"
    >
      <rect
        x="8"
        y="28"
        width="6"
        height="12"
        rx="1"
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="20"
        y="20"
        width="6"
        height="20"
        rx="1"
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="32"
        y="12"
        width="6"
        height="28"
        rx="1"
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
      />

      <path
        d="M8 32C12 32 16 24 24 24C32 24 36 8 40 8"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle cx="8" cy="32" r="2" fill="#1F2937" />
      <circle cx="24" cy="24" r="2" fill="#1F2937" />
      <circle cx="40" cy="8" r="2" fill="#1F2937" />

      <path
        d="M6 40L42 40"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      <path
        d="M6 32L42 32"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      <path
        d="M6 24L42 24"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
    </svg>
  );
};

export default MetricsIcon;
