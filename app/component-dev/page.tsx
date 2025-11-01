"use client";

import { Button, Text, Input, Card, Background } from '@/app/core/atoms';

const ComponentDev = () => {
    return (
        <div className="p-3 m-3">
            <h5 className="text-2xl font-bold mb-3">Atoms</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Button title="Click me" type="primary" onClick={() => alert("helelo")} />
                <Text variant="h1" size="md" weight="bold" align="center" isDarkTheme={false}>
                    hello there
                </Text>
                <Input
                    type="text"
                    error={false}
                    errorMessage=""
                />
                <Card hoverable>
                    eek
                </Card>
                <Background>
                    eek
                </Background>
            </div>
        </div>
    );
};
export default ComponentDev;