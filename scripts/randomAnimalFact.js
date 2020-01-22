const fetch = require("node-fetch");

module.exports = (robot) => {
    robot.respond(/(Cat Fact| Tell me a cat fact| Dog Fact| Tell me a dog fact)/gi, (res) => {
        var message = JSON.stringify(res.envelope.message.text);

        if(message.includes("Cat"))
            var url = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1"
        else if(message.includes("Dog"))
            var url = "https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1"
        else {
            res.reply("No facts found! Try again");
            return;
        }


        fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                // console.log(data.text);

                res.reply(data.text);
            })
            .catch(function(error) {
                res.reply(error);
            });  
    })
  }
