const Card = ({
    children,
    variant = "default",
    padding = "md",
    shadow = "md",
    rounded = "lg",
    isDarkTheme = false,
    hoverable = false,
    onClick,
}: {
    children: React.ReactNode;
    variant?: "default" | "outlined" | "elevated" | "filled";
    padding?: "none" | "sm" | "md" | "lg" | "xl";
    shadow?: "none" | "sm" | "md" | "lg" | "xl";
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    isDarkTheme?: boolean;
    hoverable?: boolean;
    onClick?: () => void;
}) => {
    const paddingStyles = {
        none: "p-0",
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
    };

    const shadowStyles = {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
    };

    const roundedStyles = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
    };

    const lightVariantStyles = {
        default: "bg-white border border-gray-200",
        outlined: "bg-transparent border-2 border-gray-300",
        elevated: "bg-white border-none",
        filled: "bg-gray-50 border border-gray-100",
    };

    const darkVariantStyles = {
        default: "bg-gray-800 border border-gray-700",
        outlined: "bg-transparent border-2 border-gray-600",
        elevated: "bg-gray-800 border-none",
        filled: "bg-gray-900 border border-gray-800",
    };

    const variantStyles = isDarkTheme ? darkVariantStyles : lightVariantStyles;

    const hoverStyles = hoverable
        ? isDarkTheme
            ? "hover:bg-gray-700 hover:shadow-lg cursor-pointer transition-all duration-200"
            : "hover:bg-gray-50 hover:shadow-lg cursor-pointer transition-all duration-200"
        : "";

    const clickableStyles = onClick ? "cursor-pointer" : "";

    const className = `${variantStyles[variant]} ${paddingStyles[padding]} ${shadowStyles[shadow]} ${roundedStyles[rounded]} ${hoverStyles} ${clickableStyles}`;

    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;