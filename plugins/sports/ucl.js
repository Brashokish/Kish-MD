import axios from "axios"

const API_KEY = "032eebd79a6e4fb38dfb08114234c558"

export default {

  name: "ucl",
  category: "sports",
  description: "Champions League standings",

  async execute(sock,m){

    try{

      const res = await axios.get(
        "https://api.football-data.org/v4/competitions/CL/standings",
        { headers:{ "X-Auth-Token": API_KEY } }
      )

      const table = res.data.standings[0].table

      let text = "⭐ *Champions League Table*\n\n"

      table.forEach(t=>{
        text += `${t.position}. ${t.team.name} - ${t.points} pts\n`
      })

      sock.sendMessage(m.from,{text},{quoted:m})

    }catch{
      m.reply("❌ Failed to fetch UCL")
    }

  }

}
