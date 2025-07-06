import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return (
    <h2
      className={`text-4xl font-bold text-center leading-snug text-[#171717] ${className ?? ""}`}
    >
      {children}
    </h2>
  );
};
