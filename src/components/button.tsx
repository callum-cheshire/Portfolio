import React from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-background-grey pl-4 pr-4 p-1 border-2 rounded border-tech-blue text-tech-blue"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
