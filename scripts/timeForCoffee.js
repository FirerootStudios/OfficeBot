module.exports = (robot) => {
    robot.respond(/(I need Coffee|Coffee|Coffee Time)/gi, (res) => {        
        res.reply(`Trying to communicate with coffee set appereet..`);
        setTimeout(timeoutResponse(res), 4000);
    })

    function timeoutResponse(res) {
        return function() {
            res.reply("Failed. :(");
        }
    }    
}