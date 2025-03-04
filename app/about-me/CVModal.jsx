import React from "react";
import { motion } from "framer-motion";

const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (event) => {
    if (event.target.id === "modal") {
      onClose();
    }
  };

  return (
    <div
      id="modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="w-full mt-14 max-w-[70vw] h-[90vh] p-6 bg-white rounded-lg shadow-lg"
      >
        <div
          typeof="button"
          onClick={onClose}
          className="z-10 flex items-center justify-end text-gray-600 cursor-pointer hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 transition-transform duration-300 transform hover:rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="mb-4 text-2xl font-bold">Curriculum Vitae</h2>
        <iframe
          src="/assets/cv/CV_ANTHONY_ABRAMO_2025_TW.pdf"
          className="w-full h-[90%] border-0"
          title="CV"
        />
      </motion.div>
    </div>
  );
};

export default CVModal;
