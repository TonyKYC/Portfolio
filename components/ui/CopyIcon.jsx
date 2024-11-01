import React from "react";

const CopyIcon = ({ onClick }) => (
  <div className="flex items-center" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4" />
      <rect x="9" y="9" width="10" height="10" rx="2" />
    </svg>
    <p className="md:ml-1 lg:ml-2 max-sm:text-xs">Copy Email</p>
  </div>
);

export default CopyIcon;
