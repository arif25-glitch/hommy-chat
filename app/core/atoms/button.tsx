const Button = ({
    title,
    type="primary",
    size="md",
    itemsAlign="center",
    justifyContent="center",
    isDarkTheme=false,
    full=false,
    onClick=()=>{},
}: {
    title: string;
    type?: "primary" | "secondary" | "cta" | "error";
    size?: string;
    itemsAlign?: string;
    justifyContent?: string;
    isDarkTheme?: boolean;
    full?: boolean;
    onClick?: () => void;
}) => {
    const lightColorStyles = {
        primary: "bg-[#2A9D8F] hover:bg-[#238276]",
        secondary: "bg-[#E9C46A] hover:bg-[#d4b05e]",
        cta: "bg-[#F4A261] hover:bg-[#e08f51]",
        error: "bg-[#E76F51] hover:bg-[#d15d42]",
    }

    const darkColorStyles = {
        primary: "bg-[#1a5f58] hover:bg-[#134a44]",
        secondary: "bg-[#8a7540] hover:bg-[#6f5e33]",
        cta: "bg-[#a3633d] hover:bg-[#8a5435]",
        error: "bg-[#a34631] hover:bg-[#893a29]",
    }

    const colorStyles = isDarkTheme ? darkColorStyles : lightColorStyles

    return (
        <button className={`flex ${full ? "w-full" : "w-fit"} h-12 ${size} items-${itemsAlign} justify-${justifyContent} gap-2 rounded-full ${colorStyles[type]} px-5 text-background transition-colors`} onClick={onClick}>
            {title}
        </button>
    );
};
export default Button;