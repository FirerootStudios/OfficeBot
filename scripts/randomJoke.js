const fetch = require("node-fetch");

module.exports = (robot) => {
    robot.respond(/(Joke|Dark Joke|Give me a joke|Give me a dark joke|Tell me a joke|Tell me a dark joke)/gi, (res) => {
        var message = JSON.stringify(res.envelope.message.text);
        var url = "https://sv443.net/jokeapi/category/Any"

        if(message.includes("Dark"))
        {
            url = "https://sv443.net/jokeapi/category/Dark"
        }

        fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                console.log(data);

                if(data.type == "twopart")
                {
                    res.reply(data.setup);
                    setTimeout(timeoutResponse(res), 4000);

                    function timeoutResponse(res) {
                        return function() {
                            res.reply(data.delivery);
                        }
                    }    
                }

                else {
                    res.reply(data.joke);
                }
            })
            .catch(function(error) {
                res.reply(error);
            });  
    })
  }
