import { Text } from "@/app/core/components/atoms";
import { useEffect } from "react";

const AutoTyping = ({
    value,
    message,
    setMessage,
    margin,
    padding,
    width="full",
    speed=100,
    isDarkTheme=false,
}: {
    value: string;
    message: string;
    setMessage: (message: string) => void;
    margin?: string;
    padding?: string;
    width?: "full" | "fit";
    speed?: number;
    isDarkTheme?: boolean;
}) => {
    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (message.length < value.length) {
                setMessage(message + value[message.length]);
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => clearInterval(typingInterval);
    }, [message, setMessage, value, speed]);

    return (
        <div className={`w-${width} ${margin} ${padding}`}>
            <Text variant="body" size="md" color="default" isDarkTheme={isDarkTheme}>
                {message}
            </Text>
        </div>
    );
};
export default AutoTyping;