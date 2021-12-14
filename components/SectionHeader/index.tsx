import React from "react";

interface props {
  children: any;
  id: string;
  line?: boolean;
}

const SectionHeader: React.FC<props> = ({ children, id, line }) => {
  return (
    <div>
      <h2 className="text-4xl text-center font-medium mb-8" id={id}>
        {children}
      </h2>

      {line && <div className="mx-auto w-48 h-1 bg-black mb-12" />}
    </div>
  );
};

export default SectionHeader;
