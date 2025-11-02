import { LucideIcon } from "lucide-react";

const Icon = ({
    icon: IconComponent,
    size = "md",
    color = "default",
    isDarkTheme = false,
    strokeWidth = 2,
    className = "",
}: {
    icon: LucideIcon;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    color?: "default" | "primary" | "secondary" | "muted" | "error" | "success";
    isDarkTheme?: boolean;
    strokeWidth?: number;
    className?: string;
}) => {
    const sizeStyles = {
        xs: 12,
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
        "2xl": 40,
    };

    const lightColorStyles = {
        default: "text-foreground",
        primary: "text-[#2A9D8F]",
        secondary: "text-[#E9C46A]",
        muted: "text-gray-600",
        error: "text-[#E76F51]",
        success: "text-green-600",
    };

    const darkColorStyles = {
        default: "text-gray-100",
        primary: "text-[#3dbfa9]",
        secondary: "text-[#f5d97a]",
        muted: "text-gray-400",
        error: "text-[#ff8672]",
        success: "text-green-400",
    };

    const colorStyles = isDarkTheme ? darkColorStyles : lightColorStyles;

    return (
        <IconComponent
            size={sizeStyles[size]}
            strokeWidth={strokeWidth}
            className={`${colorStyles[color]} ${className}`}
        />
    );
};

export default Icon;
