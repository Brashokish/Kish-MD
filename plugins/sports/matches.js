import axios from "axios"

const API_KEY = "032eebd79a6e4fb38dfb08114234c558"

export default {

  name: "matches",
  category: "sports",
  description: "Today's football matches",

  async execute(sock,m){

    try{

      const res = await axios.get(
        "https://api.football-data.org/v4/matches",
        { headers:{ "X-Auth-Token": API_KEY } }
      )

      const matches = res.data.matches.slice(0,10)

      let text = "⚽ *Today's Matches*\n\n"

      matches.forEach(match=>{
        text += `${match.homeTeam.name} vs ${match.awayTeam.name}\n`
        text += `🏆 ${match.competition.name}\n`
        text += `Status: ${match.status}\n\n`
      })

      sock.sendMessage(m.from,{text},{quoted:m})

    }catch{
      m.reply("❌ Failed to fetch matches")
    }

  }

}
