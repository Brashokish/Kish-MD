export default {

  name: "autopresence",
  owner: true,
  category:'owner',
  description: "Control bot typing/recording presence",

  async execute(sock,m,args){

    const mode = (args[0] || "").toLowerCase()

    if(!mode){
      return m.reply(
`Usage:
.autopresence typing
.autopresence recording
.autopresence random
.autopresence off`
      )
    }

    if(["typing","recording","random","off"].includes(mode)){

      global.autoPresenceMode = mode

      return m.reply(`✅ Auto presence set to *${mode}*`)
    }

    m.reply("Invalid mode")
  }

}