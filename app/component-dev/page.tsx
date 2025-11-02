"use client";

import { Button, Text, Input, Card, Background } from '@/app/core/components/atoms';
import { Dropdown, AutoTyping } from '@/app/core/components/molecules';
import { useEffect, useState } from 'react';

const ComponentDev = () => {
    const [value, setValue] = useState<string>("");
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [autoTypeTest, setAutoType] = useState<string>("");

    useEffect(() => {
        for(let i = 0; i < 10; i++) {
            setTimeout(() => {
                setAutoType((prev) => prev + " my home ");
            }, i * 100);
        }
    }, []);

    return (
        <div>
            <Background isDarkTheme={darkTheme} className='p-3'>
                <Text variant="h4" size="md" weight="bold" align="center" isDarkTheme={darkTheme}>
                    Component Dev
                </Text>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    <Button title="Click me" type="primary" onClick={() => setDarkTheme(!darkTheme)} isDarkTheme={darkTheme} rounded="lg" />
                    <Text variant="h1" size="md" weight="bold" align="center" isDarkTheme={darkTheme}>
                        hello there
                    </Text>
                    <Input
                        type="text"
                        error={false}
                        errorMessage=""
                        isDarkTheme={darkTheme}
                    />
                    <Card hoverable isDarkTheme={darkTheme}>
                        <Text variant="body" size="md" weight="bold" align="center" isDarkTheme={darkTheme}>
                            hello there
                        </Text>
                    </Card>
                </div>
                <Text variant="h4" size="md" weight="bold" align="center" isDarkTheme={darkTheme}>
                    Molecules
                </Text>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <Dropdown
                        options={[
                            { value: "option1", label: "Option 1" },
                            { value: "option2", label: "Option 2" },
                            { value: "option3", label: "Option 3" },
                        ]}
                        value={value}
                        onChange={(value) => setValue(value)}
                        isDarkTheme={darkTheme}
                    />
                    <AutoTyping 
                        value={autoTypeTest}
                        message={message}
                        setMessage={setMessage} 
                        margin="mt-4"
                        padding="p-4"
                        speed={10} 
                        isDarkTheme={darkTheme}
                    />
                </div>
            </Background>
        </div>
    );
};
export default ComponentDev;