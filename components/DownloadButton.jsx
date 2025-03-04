import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv/CV_ANTHONY_ABRAMO_2025_TW.pdf";
    link.download = "Anthony_ABRAMO_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 mr-2 text-white bg-blue-600 max-sm:text-xs md:py-2 lg:py-2 h-11 hover:bg-blue-700 rounded-xl"
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
