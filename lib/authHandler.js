import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupBotAuth(credsBase64) {
  try {
    const authDir = path.join(__dirname, '..', 'auth', 'session');
    const credsPath = path.join(authDir, 'creds.json');

    if (!fs.existsSync(authDir)) {
      fs.mkdirSync(authDir, { recursive: true });
    }

    if (!fs.existsSync(credsPath) || credsBase64 !== 'SKIP') {
      console.log('📡 Setting up authentication...');
      
      const decodedCreds = Buffer.from(credsBase64, 'base64').toString('utf8');
      fs.writeFileSync(credsPath, decodedCreds, 'utf8');
      
      console.log('✅ Credentials loaded');
    }

    return authDir;
  } catch (e) {
    console.error('❌ Authentication setup failed:', e.message);
    throw e;
  }
}
