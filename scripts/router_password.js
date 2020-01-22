module.exports = (robot) => {
    robot.respond(/(Router|Router Wachtwoord|Wachtwoord Router|Wifi)/gi, (res) => {
        const ww24 = '947XKfdsBddF';
        const ww5 =  '947XKfdsBddF5GHz';
        
        res.reply(`Here are the passwords: 
            \n #DikkeVorteqRouter: ${ww24} 
            \n #DikkeFirerootRouter: ${ww5}
        `)
    })
  }