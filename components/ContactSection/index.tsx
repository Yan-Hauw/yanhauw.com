import React from "react";

// components
import SectionHeader from "../SectionHeader";

const ContactSection = () => {
  return (
    <div className="py-20">
      <SectionHeader id="contact" line>
        Contact
      </SectionHeader>

      <div className="text-center text-gray-500 font-bold">Email:</div>

      <div className="text-center">yanhauw3@gmail.com</div>
    </div>
  );
};

export default ContactSection;
