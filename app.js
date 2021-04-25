// const validator = require("validator")
const fs = require("fs")
const clk = require("chalk")
const ygs = require("yargs")
const getNotes = require("./notes")
const yargs = require("yargs")
const name = "chenyun"

// console.log(getNotes())
// fs.appendFileSync("notes.txt", " from me")
// fs.writeFileSync("notes.text", "hello world")
// console.log(validator.isEmail("abcmail.co"));
// console.log(clk.bold.blue("hello world"));
// console.log("process.argv",process.argv)
// console.log("yargs.argv",yargs.argv)

// const command = process.argv[2];
// if (command === "add") {
//     console.log("Adding note")
// } else if (command === "remove") {
//     console.log("removing note")
// }

yargs.version("1.0.0")

yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe:"Note title"
        }
    },
    handler: function () {
        console.log("adding a new note",argv)
    }
})

yargs.command({
    command: "remove",
    describe: "remove a new note",
    handler: function () {
        console.log("removing a new note")
    }
})

yargs.command({
    command:"list",
    describe: "list notes",
    handler: function() {
        console.log("list notes")
    }
})

yargs.command({
    command:"read",
    describe: "reading a note",
    handler: function(){
        console.log("read notes")
    }
})

console.log(yargs.argv);