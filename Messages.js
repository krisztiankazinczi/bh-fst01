let usrs=require('./Users.js');
let messages=[];
let tempUsers=[];

class Message{
    constructor(from, to, messg){
        this.from=from;
        this.to=to;
        this.theMessage=messg;
    }
}

function add(from, to, messg){
    if(usrs.isRegistered(from) && usrs.isRegistered(to)){
        messages.push(new Message(from, to, messg));
        tempUsers[0]=from;
        tempUsers[1]=to;
        console.log("Az üzenet sikeresen el lett küldve.");
    }else{
        console.log("A felhasználók regisztrációja szükséges !");
        
    }
}

function getMessagesFrom(usrname){
    let fromMsgs=[];
    for(let i=0;i<messages.length;i++){
        if(messages[i].from == usrname){
            fromMsgs.push(messages[i].theMessage);
        }
    }
    return fromMsgs;
}

function getMessagesTo(usrname){
    let toMsgs=[];
    for(let i=0;i<messages.length;i++){
        if(messages[i].to == usrname){
            toMsgs.push(messages[i].theMessage);
        }
    }
    return toMsgs;
}

function tUsers(){
	return tempUsers;
}


module.exports.temporaryUsers=tUsers;
module.exports.add=add;
module.exports.getMessagesFrom=getMessagesFrom;
module.exports.getMessagesTo=getMessagesTo;



add("Zoli","Pista","Szervusz! Hogy vagy?");
usrs.register("Zoli");
usrs.register("Pista");
usrs.register("Mari");
usrs.register("Ági");
add("Zoli","Pista","Szervusz! Hogy vagy?");
add("Zoli","Ági","Egy időpontot kérek!");
usrs.getUsers();
console.log(getMessagesFrom("Zoli"));