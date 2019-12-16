let user = require("./user");

class Message{
    constructor(from,to,text) {
        this.from = from;
        this.to = to;
        this.text = text;
    }
}

let messages = [];

function add(from,to,msg){
    if(!user.isRegistered(from)){
        return false;
    }
    if(!user.isRegistered(to)){
        return false;
    }
    messages.push(new Message(from,to,msg));
    return true;
}

function getMessagesFrom(username){
    if(!user.isRegistered(username)){
        return false;
    }
    let userMessage = [];
    messages.forEach(element => {
        if(element.from == username){
            userMessage.push(element);
        }
    });
    return userMessage;
}

function getMessagesTo(username){
    if(!user.isRegistered(username)){
        return false;
    }
    let userMessage = [];
    messages.forEach(element => {
        if(element.to == username){
            userMessage.push(element);
        }
    });
    return userMessage;
}

module.exports = {
    add : add,
    getMessagesFrom : getMessagesFrom,
    getMessagesTo : getMessagesTo
}