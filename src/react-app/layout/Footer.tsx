import React from "react";
import MrHiB_Logo from "../assets/MrHiB.png"; // Update the path as needed

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Behzad Njf. All rights reserved.
          </p>
          <img src={MrHiB_Logo} width="50" alt="MrHiB Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
