const accountId = 12345
var accountPassword = "1234"
let accountEmail = "rishi@google.com"
accountCity = "jajarkot"
// accountId=2  Not allowded
console.log(accountId)
accountPassword = "112233"
accountEmail = "rrn@gmail.com "
accountCity = "ktm"
let accountState;
/*don not use var because of issues in block{} and functional scope{}*/
console.table([accountId, accountPassword, accountEmail, accountCity,accountState])
