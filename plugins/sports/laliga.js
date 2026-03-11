import axios from "axios"

const API_KEY = "032eebd79a6e4fb38dfb08114234c558"

export default {

  name: "laliga",
  category: "sports",
  description: "La Liga standings",

  async execute(sock,m){

    try{

      const res = await axios.get(
        "https://api.football-data.org/v4/competitions/PD/standings",
        { headers:{ "X-Auth-Token": API_KEY } }
      )

      const table = res.data.standings[0].table

      let text = "🇪🇸 *La Liga Table*\n\n"

      table.slice(0,10).forEach(t=>{
        text += `${t.position}. ${t.team.name} - ${t.points} pts\n`
      })

      sock.sendMessage(m.from,{text},{quoted:m})

    }catch{
      m.reply("❌ Failed to fetch La Liga")
    }

  }

}
