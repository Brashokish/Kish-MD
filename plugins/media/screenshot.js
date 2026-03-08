import axios from 'axios';

export default {
  name: 'screenshot',
  aliases: ['ssweb', 'ss'],
  description: 'Take a screenshot of any website',
  usage: '!screenshot <url>',
  category: 'tools',
  owner: false,
  group: false,
  private: false,
  
  async execute(sock, m, args) {
    if (!args[0]) {
      return m.reply(`📸 Take a screenshot of any website!

*Usage:*
• !screenshot <url>
• !ssweb <url>
• !ss <url>

*Examples:*
• !screenshot https://google.com
• !ss github.com`);
    }

    let url = args[0];
    
   
    url = url.replace(/[<>]/g, '');
    
  
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    
   
    try {
      new URL(url);
    } catch (e) {
      return m.reply('❌ Invalid URL format!\n\nExample: !screenshot https://google.com');
    }

    await m.react('📸');

    try {
    
      const screenshotUrl = `https://image.thum.io/get/fullpage/${url}`;
      
      
      const response = await axios.get(screenshotUrl, {
        responseType: 'arraybuffer',
        timeout: 6000,
        maxContentLength: 10 * 1024 * 1024, 
        headers: {
          'User-Agent': 'WhatsApp-Bot/1.0'
        }
      });
      
      const imageBuffer = Buffer.from(response.data);
      
     
      const MIN_VALID_SIZE = 5000; 
      
      if (imageBuffer.length < MIN_VALID_SIZE) {
        throw new Error(`Screenshot too small (${imageBuffer.length} bytes). Website may not be accessible.`);
      }
      
      
      const isPNG = imageBuffer.slice(0, 8).toString('hex') === '89504e470d0a1a0a';
      if (!isPNG) {
        throw new Error('Response is not a valid image');
      }
      
      
      await sock.sendMessage(m.from, {
        image: imageBuffer,
        caption: `📸 *Screenshot Captured*

🔗 *URL:* ${url}
📊 *Size:* ${(imageBuffer.length / 1024).toFixed(2)} KB`
      }, { quoted: m });
      
      await m.react('');
      
    } catch (error) {
      console.error('Screenshot error:', error);
      await m.react('❌');
      
      let errorMsg = '❌ Failed to capture screenshot\n\n';
      
      if (error.response?.status === 429) {
        errorMsg += '⚠️ Rate limit reached\nTry again in a few minutes.';
      } else if (error.code === 'ETIMEDOUT' || error.code === 'ECONNABORTED') {
        errorMsg += '⏱️ Request timeout\nThe website took too long to load (>45s).';
      } else if (error.response?.status === 400 || error.response?.status === 404) {
        errorMsg += '🚫 Website not found or not accessible';
      } else if (error.message.includes('too small')) {
        errorMsg += error.message;
      } else {
        errorMsg += `Error: ${error.message}\n\nMake sure:\n• URL is valid\n• Website is accessible\n• Not behind login/CAPTCHA`;
      }
      
      await m.reply(errorMsg);
    }
  }
};
