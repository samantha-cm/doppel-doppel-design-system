// Button.tsx
import React from "react";
import "./button.css";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  loading = false,
  children,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`btn ${className || ""}`}
      data-variant={variant}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};
