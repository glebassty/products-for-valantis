import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  styles?: string;
}

const Button = ({ children, onClick, styles }: ButtonProps) => {
  const basicStyle =
    "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900";

  const buttonClasses = styles ? `${basicStyle} ${styles}` : basicStyle;

  return (
    <div className={buttonClasses}>
      <button onClick={onClick} type="button">
        {children}
      </button>
    </div>
  );
};

export default Button;
