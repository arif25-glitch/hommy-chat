const Input = ({
    type = "text",
    placeholder = "",
    value,
    onChange,
    size = "md",
    variant = "default",
    isDarkTheme = false,
    disabled = false,
    error = false,
    full = false,
    label,
    errorMessage,
}: {
    type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "outlined" | "filled";
    isDarkTheme?: boolean;
    disabled?: boolean;
    error?: boolean;
    full?: boolean;
    label?: string;
    errorMessage?: string;
}) => {
    const sizeStyles = {
        sm: "h-9 text-sm px-3",
        md: "h-12 text-base px-4",
        lg: "h-14 text-lg px-5",
    };

    const lightVariantStyles = {
        default: "bg-white border border-gray-300 focus:border-[#2A9D8F] focus:ring-1 focus:ring-[#2A9D8F]",
        outlined: "bg-transparent border-2 border-gray-400 focus:border-[#2A9D8F]",
        filled: "bg-gray-100 border border-transparent focus:bg-white focus:border-[#2A9D8F]",
    };

    const darkVariantStyles = {
        default: "bg-gray-800 border border-gray-600 focus:border-[#3dbfa9] focus:ring-1 focus:ring-[#3dbfa9]",
        outlined: "bg-transparent border-2 border-gray-500 focus:border-[#3dbfa9]",
        filled: "bg-gray-700 border border-transparent focus:bg-gray-800 focus:border-[#3dbfa9]",
    };

    const variantStyles = isDarkTheme ? darkVariantStyles : lightVariantStyles;

    const textColor = isDarkTheme ? "text-gray-100" : "text-gray-900";
    const placeholderColor = isDarkTheme ? "placeholder:text-gray-400" : "placeholder:text-gray-500";
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
    const errorStyles = error ? "border-[#E76F51] focus:border-[#E76F51] focus:ring-[#E76F51]" : "";
    const widthStyle = full ? "w-full" : "w-auto";

    const inputClassName = `${sizeStyles[size]} ${variantStyles[variant]} ${textColor} ${placeholderColor} ${disabledStyles} ${errorStyles} ${widthStyle} rounded-lg outline-none transition-all duration-200`;

    return (
        <div className={`flex flex-col gap-1 ${full ? "w-full" : "w-auto"}`}>
            {label && (
                <label className={`text-sm font-medium ${isDarkTheme ? "text-gray-200" : "text-gray-700"}`}>
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={inputClassName}
            />
            {error && errorMessage && (
                <span className="text-xs text-[#E76F51]">{errorMessage}</span>
            )}
        </div>
    );
};

export default Input;