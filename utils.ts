// utils.ts
export function greet(name: string) {
    return `Hello, ${name}!`;
}

export function calculate(x: number) {
    return x * 2;
}

export const DEFAULT_NAME = "World";

export type UserInfo = {
    name: string;
    age: number;
};


