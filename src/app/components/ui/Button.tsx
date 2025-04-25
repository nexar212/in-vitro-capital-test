'use client';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Mejorar contraste en todos los variantes
  const variantStyles = {
    primary: "bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-500", // Más oscuro para mejor contraste
    secondary: "bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-500", // Más oscuro para mejor contraste
    outline: "border-2 border-blue-700 text-blue-700 hover:bg-blue-50 focus:ring-blue-500" // Más oscuro para mejor contraste
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}