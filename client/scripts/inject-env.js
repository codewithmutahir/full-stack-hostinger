// Script to inject environment variables at build time
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const apiUrl = process.env.VITE_API_URL || 'http://localhost:4000';

const configContent = `// Auto-generated at build time - DO NOT EDIT
export const API_URL = ${JSON.stringify(apiUrl)};
`;

const configPath = join(__dirname, '../src/config.js');
writeFileSync(configPath, configContent, 'utf-8');

console.log(`✅ Injected API_URL: ${apiUrl}`);

