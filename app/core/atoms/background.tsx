const Background = ({
    children,
    type = "solid",
    color,
    gradient,
    image,
    imagePosition = "center",
    imageSize = "cover",
    overlay = false,
    overlayOpacity = 0.5,
    isDarkTheme = false,
    blur = false,
    fixed = false,
}: {
    children?: React.ReactNode;
    type?: "solid" | "gradient" | "image";
    color?: string;
    gradient?: string;
    image?: string;
    imagePosition?: "center" | "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
    imageSize?: "cover" | "contain" | "auto" | "fill";
    overlay?: boolean;
    overlayOpacity?: number;
    isDarkTheme?: boolean;
    blur?: boolean;
    fixed?: boolean;
}) => {
    const defaultLightColor = "#FFFFFF";
    const defaultDarkColor = "#1F2937";

    const positionMap = {
        center: "center center",
        top: "center top",
        bottom: "center bottom",
        left: "left center",
        right: "right center",
        "top-left": "left top",
        "top-right": "right top",
        "bottom-left": "left bottom",
        "bottom-right": "right bottom",
    };

    const getBackgroundStyle = () => {
        if (type === "image" && image) {
            return {
                backgroundImage: `url(${image})`,
                backgroundPosition: positionMap[imagePosition],
                backgroundSize: imageSize,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: fixed ? "fixed" : "scroll",
            };
        }

        if (type === "gradient" && gradient) {
            return {
                background: gradient,
            };
        }

        if (type === "solid") {
            const bgColor = color || (isDarkTheme ? defaultDarkColor : defaultLightColor);
            return {
                backgroundColor: bgColor,
            };
        }

        return {};
    };

    const blurClass = blur ? "backdrop-blur-sm" : "";
    const overlayColor = isDarkTheme ? "bg-black" : "bg-white";

    return (
        <div className="relative w-full h-full min-h-screen" style={getBackgroundStyle()}>
            {overlay && type === "image" && (
                <div 
                    className={`absolute inset-0 ${overlayColor}`}
                    style={{ opacity: overlayOpacity }}
                />
            )}
            {blur && (
                <div className="absolute inset-0 backdrop-blur-md" />
            )}
            <div className={`relative z-10 w-full h-full ${blurClass}`}>
                {children}
            </div>
        </div>
    );
};

export default Background;