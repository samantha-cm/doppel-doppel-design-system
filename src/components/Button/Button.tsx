// Button.tsx
import React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const buttonStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "#e7ff92",
    color: "#1b141b",
    border: "none",
    padding: "8px 16px",
    borderRadius: 8,
    cursor: "pointer",
  },
  secondary: {
    backgroundColor: "#767276",
    color: "#ffffff",
    border: "none",
    padding: "8px 16px",
    borderRadius: 8,
    cursor: "pointer",
  },
  tertiary: {
    backgroundColor: "transparent",
    color: "#a4a1a4",
    border: "1px solid #d1d0d1",
    padding: "8px 16px",
    borderRadius: 8,
    cursor: "pointer",
  },
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  style,
  ...rest
}) => {
  const baseStyle = buttonStyles[variant];

  return (
    <button style={{ ...baseStyle, ...style }} {...rest}>
      {children}
    </button>
  );
};
