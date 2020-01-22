module.exports = (robot) => {
    robot.respond(/(what can you do)/gi, (res) => {
      res.reply
      (`It's pretty simple! You can ask things like:
        "Tell me a joke"
        "Tell me a cat (or dog) fact"

        or say "Wifi" or "Router" to get wifi passwords
        
        ..and other stuff!
      `)
    })
  }