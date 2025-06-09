import React from "react";
import { Mail, Github } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Interested in working together? Feel free to contact me!
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <a
              href="mailto:behzadnjf22@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </a>
            <a
              href="https://github.com/behzad-njf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
