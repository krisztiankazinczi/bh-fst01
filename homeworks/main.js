let user = require ("./user")
let message = require ("./message")


user.expGetUsers()

message.expAdd("habiszti", "pistike", "teszt szöveg")

console.log("-------------------------------------------------------------------------------")
console.log("Hozzunk létre felhasználókat, majd jelenítszük meg az egyikük már benne van.")
console.log(user.expRegister("habiszti"))
console.log(user.expRegister("pistike"))
console.log(user.expRegister("babbinéni"))
user.expGetUsers()
console.log("-------------------------------------------------------------------------------")

console.log("Új üzenetek felvétele a rendszerbe")
message.expAdd("habiszti", "pistike", "Habisztitől Pistikének")
message.expAdd("pistike", "babbinéni", "Pistikétől Babbinéninek")
message.expAdd("babbbinéni", "pistike", "Babbinénitől Pistikének")
message.expAdd("babbinéni", "habiszti", "Babbinénitől Habisztinek")
message.expAdd("pistike", "habiszti", "Pistikétől Habisztinek")
console.log("-------------------------------------------------------------------------------")
console.log("Üzenetek a küldő alapján")
console.log(message.expGetMessagesFrom("habiszti"))
console.log(message.expGetMessagesFrom("pistike"))
console.log(message.expGetMessagesFrom("babbinéni"))
console.log("-------------------------------------------------------------------------------")
console.log("Üzenetek a fogadó alapján")
console.log(message.expGetMessagesTo("habiszti"))
console.log(message.expGetMessagesTo("pistike"))
console.log(message.expGetMessagesTo("babbinéni"))
console.log("-------------------------------------------------------------------------------")

