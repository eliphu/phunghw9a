const myAccount = require("./accounting.js");
const jeff = new myAccount("Jeff");
jeff.credit(150);
console.log(jeff.describe());