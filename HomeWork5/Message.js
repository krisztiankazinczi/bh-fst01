let usersModule = require('./Users.js');

class Message{
    constructor(from, to, text){
        this.from = from;
        this.to = to;
        this.text = text;
    }
}

let messages = [];

function add(from,to,text){
    if(usersModule.expIsRegistered(from)==true &&
    usersModule.expIsRegistered(to) == true){
        let message = new Message(from,to,text);
        messages.push(message);
    }
    return false
}

function getMessages(place,userName){
    let sendedMessages = []
    for (let index = 0; index < messages.length; index++) {
        if( place == "from" && messages[index].from == userName ){
            sendedMessages.push(messages[index])
        }else if(place == "to" && messages[index].to == userName){
            sendedMessages.push(messages[index])
        }
        return console.log(sendedMessages); 
    }
    return console.log(sendedMessages);
};

function getMessagesFrom(userName){
    getMessages("from",userName);
};
function getMessagesto(userName){
    getMessages("to",userName);
};

usersModule.expRegister("Lajos");
usersModule.expRegister("Peter");
add("Lajos", "Peter", "Tartozol 500-zal");
getMessagesFrom("Lajos");
getMessagesto("Tibi");
getMessagesto("Peter");
console.log(messages);