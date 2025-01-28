// main.ts
// Static import for comparison
import { DEFAULT_NAME } from './utils';

// Function with dynamic import
async function greetUser(name: string) {
    const { greet } = await import('./utils');
    return greet(name);
}

// Conditional dynamic import
async function processNumber(num: number) {
    if (num > 0) {
        const { calculate } = await import('./utils');
        return calculate(num);
    }
    return 0;
}

// Using the imports
console.log('Static import:', DEFAULT_NAME);
greetUser('Alice').then(console.log);
processNumber(5).then(console.log);