#!/usr/bin/env node
const args = process.argv.slice(2);
const { spawn } = require('child_process');

// Usage: npm run generate component:ComponentName or path/ComponentName.
const [type, name] = args[0].split(':');

if (type === 'component' && name) {
    spawn('npx', ['plop', 'component', '--', `--name=${name}`], {
        stdio: 'inherit',
        shell: true,
    });
} else {
    console.error('❌ Usage: npm run generate component:ComponentName');
    process.exit(1);
}
