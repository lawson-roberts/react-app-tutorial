import React from "react";

interface Props {
  children: string;
  // ? makes the parameter optional so we don't have to specific what the color is and this will allow the default value to pass through with no error.
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
