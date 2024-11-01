import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv/Anthony_ABRAMO_CV_2024_Eng.pdf";
    link.download = "Anthony_ABRAMO_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 mr-2 text-white bg-blue-600 h-11 hover:bg-blue-700 rounded-xl"
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
