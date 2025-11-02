const Text = ({
    children,
    variant = "body",
    size = "md",
    color = "default",
    weight = "normal",
    align = "left",
    isDarkTheme = false,
}: {
    children: React.ReactNode;
    variant?: "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "small";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    color?: "default" | "primary" | "secondary" | "muted" | "error" | "success";
    weight?: "light" | "normal" | "medium" | "semibold" | "bold";
    align?: "left" | "center" | "right" | "justify";
    isDarkTheme?: boolean;
}) => {
    const sizeStyles = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
    };

    const variantSizes = {
        h1: "text-4xl md:text-5xl",
        h2: "text-3xl md:text-4xl",
        h3: "text-2xl md:text-3xl",
        h4: "text-xl md:text-2xl",
        body: sizeStyles[size],
        caption: "text-sm",
        small: "text-xs",
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

    const weightStyles = {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
    };

    const alignStyles = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
    };

    const colorStyles = isDarkTheme ? darkColorStyles : lightColorStyles;

    const Tag = 
        variant === "h1" ? "h1" :
        variant === "h2" ? "h2" :
        variant === "h3" ? "h3" :
        variant === "h4" ? "h4" :
        variant === "small" || variant === "caption" ? "span" :
        "p";

    const className = `${variantSizes[variant]} ${colorStyles[color]} ${weightStyles[weight]} ${alignStyles[align]}`;

    return <Tag className={className}>{children}</Tag>;
};

export default Text;