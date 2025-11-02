import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import { Text, Icon } from "@/app/core/components/atoms";

export interface DropdownOption {
    value: string;
    label: string;
}

const Dropdown = ({
    options,
    value,
    onChange,
    placeholder = "Select an option",
    isDarkTheme = false,
    disabled = false,
    error = false,
    fullWidth = false,
}: {
    options: DropdownOption[];
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    isDarkTheme?: boolean;
    disabled?: boolean;
    error?: boolean;
    fullWidth?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    const lightStyles = {
        trigger: `bg-white border-gray-300 hover:border-gray-400 ${error ? "border-[#E76F51]" : ""}`,
        menu: "bg-white border-gray-200 shadow-lg",
        option: "hover:bg-gray-100",
        selectedOption: "bg-[#2A9D8F]/10",
    };

    const darkStyles = {
        trigger: `bg-gray-800 border-gray-600 hover:border-gray-500 ${error ? "border-[#ff8672]" : ""}`,
        menu: "bg-gray-800 border-gray-700 shadow-2xl",
        option: "hover:bg-gray-700",
        selectedOption: "bg-[#3dbfa9]/20",
    };

    const styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <div
            ref={dropdownRef}
            className={`relative ${fullWidth ? "w-full" : "w-64"}`}
        >
            <button
                type="button"
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                className={`flex items-center justify-between w-full px-4 py-3 border rounded-lg transition-colors ${styles.trigger
                    } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
                <Text
                    variant="body"
                    size="md"
                    color={selectedOption ? "default" : "muted"}
                    isDarkTheme={isDarkTheme}
                >
                    {selectedOption ? selectedOption.label : placeholder}
                </Text>
                <Icon
                    icon={isOpen ? ChevronUp : ChevronDown}
                    size="sm"
                    color="muted"
                    isDarkTheme={isDarkTheme}
                    className="transition-transform"
                />
            </button>

            {isOpen && !disabled && (
                <div
                    className={`absolute z-50 w-full mt-2 border rounded-lg overflow-hidden ${styles.menu}`}
                >
                    <div className="max-h-60 overflow-y-auto">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => handleSelect(option.value)}
                                className={`w-full px-4 py-3 text-left transition-colors flex items-center justify-between ${styles.option
                                    } ${option.value === value ? styles.selectedOption : ""
                                    }`}
                            >
                                <Text
                                    variant="body"
                                    size="md"
                                    color={option.value === value ? "primary" : "default"}
                                    isDarkTheme={isDarkTheme}
                                >
                                    {option.label}
                                </Text>
                                {option.value === value && (
                                    <Icon
                                        icon={Check}
                                        size="sm"
                                        color="primary"
                                        isDarkTheme={isDarkTheme}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;