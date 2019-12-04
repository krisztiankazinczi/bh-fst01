let messages=require('./Messages.js')
let users=[];

function isRegistered(username){
    for(let i=0;i<users.length;i++){
        if(users[i]==username){
            return true;
        }
    }
    return false;
}

function register(username){
    if(isRegistered(username)==false){
        users.push(username);
        console.log(`A ${username} regisztrációja sikerült !`);
    }else{
        console.log(`A ${username} felhasználó már regisztrálva van !`);
    }
}

function getUsers(){
    let tempUsers=messages.temporaryUsers();
    console.log(`Sent from: ${tempUsers[0]}  >  Recieved by: ${tempUsers[1]}`);
}

module.exports.isRegistered=isRegistered;
module.exports.register=register;
module.exports.getUsers=getUsers;