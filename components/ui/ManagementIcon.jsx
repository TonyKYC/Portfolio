import React from "react";

const ManagementIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 mx-auto mb-4"
    >
      {/* Central facilitator figure */}
      <circle
        cx="24"
        cy="20"
        r="5"
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M24 25L24 32"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Team members in a semi-circle */}
      <circle
        cx="14"
        cy="36"
        r="3"
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="24"
        cy="36"
        r="3"
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="34"
        cy="36"
        r="3"
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
      />

      {/* Connection lines */}
      <path
        d="M24 32L14 33"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 32L34 33"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Ceremony/meeting table representation */}
      <path
        d="M12 12H36"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Upward growth/transformation arrow */}
      <path
        d="M24 12L24 4"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 8L24 4L28 8"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ManagementIcon;
