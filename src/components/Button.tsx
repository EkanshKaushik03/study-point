import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineWhite' | 'solidWhite' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '', 
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary-blue text-white hover:bg-primary-light border-2 border-primary-blue hover:border-primary-light focus:ring-primary-blue",
    secondary: "bg-trust-green text-white hover:bg-emerald-600 border-2 border-trust-green hover:border-emerald-600 focus:ring-trust-green",
    outline: "border-2 border-primary-blue text-primary-blue bg-transparent hover:bg-primary-blue hover:text-white focus:ring-primary-blue",
    outlineWhite: "border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary-blue focus:ring-white",
    solidWhite: "bg-white text-primary-blue border-2 border-white hover:bg-gray-100 hover:border-gray-100 focus:ring-white",
    danger: "bg-red-600 text-white hover:bg-red-700 border-2 border-red-600 hover:border-red-700 focus:ring-red-600"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
