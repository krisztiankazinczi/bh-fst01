let users = [];

function isRegistered(username) {
    let userFound = false;
    users.forEach(element => {
        if(element == username) {
            userFound = true;
        }
    });
    return userFound;
}

function register(username){
    if(isRegistered(username) == false) {
        users.push(username);
        return true;
    }
    return false;
}

function getUsers(){
    let userList = "";
    users.forEach(element => {
        userList += "- " + element + "\n";
    });
    return userList;
}


module.exports = {
    isRegistered : isRegistered,
    register : register,
    getUsers : getUsers
}