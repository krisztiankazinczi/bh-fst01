let users = [];

function isRegistered(userName){
    for (let index = 0; index < users.length; index++) {
        if(userName == users[index]){
            return true;
        } 
    }
    return false;
};

function register(userName){
    for (let index = 0; index < users.length; index++) {
        if(userName==users[index]){
        return
        }        
    }
    users[users.length] = userName;
    return true
};

function getUsers(){
    console.log(users);
};



/*console.log(isRegistered("Lajos"));
console.log(users);
register("Lajos");
console.log(users);
getUsers();*/


module.exports = {
    expIsRegistered: isRegistered,
    expRegister: register,
    expGetUsers: getUsers,
}
