export default {
  name: 'weather',
  aliases: ['wthr', 'forecast'],
  description: 'Get current weather for a city',
  usage: '.weather <city name>',
  category: 'tools',
  owner: false,
  group: false,
  private: false,

  async execute(sock, m, args, context) {
    const text = args.join(' ');
    
    if (!text) {
      return sock.sendMessage(m.from, { 
        text: "🌤 Please provide a city name!\n\nExample: `.weather London`" 
      }, { quoted: m });
    }

    try {
      const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(text)}&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785`);
      
      if (!resp.ok) {
        if (resp.status === 404) {
          return sock.sendMessage(m.from, { 
            text: `❌ City "${text}" not found.` 
          }, { quoted: m });
        }
        throw new Error(`HTTP error! status: ${resp.status}`);
      }

      const data = await resp.json();

      const message = `🌍 *Weather in ${data.name}, ${data.sys.country}*\n\n` +
        `🌡 *Temperature:* ${data.main.temp}°C (feels like ${data.main.feels_like}°C)\n` +
        `☁️ *Conditions:* ${data.weather[0].description}\n` +
        `💧 *Humidity:* ${data.main.humidity}%\n` +
        `💨 *Wind:* ${data.wind.speed} m/s\n` +
        `📊 *Pressure:* ${data.main.pressure} hPa\n` +
        `👁 *Visibility:* ${data.visibility / 1000} km`;

      await sock.sendMessage(m.from, { text: message }, { quoted: m });

    } catch (e) {
      console.error('Weather error:', e);
      await sock.sendMessage(m.from, { 
        text: "❌ Failed to fetch weather data." 
      }, { quoted: m });
    }
  }
};
