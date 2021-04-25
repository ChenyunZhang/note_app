// const validator = require("validator")
const fs = require("fs")
const clk = require("chalk")
const getNotes = require("./notes")
const name = "chenyun"
// console.log(getNotes())
// fs.appendFileSync("notes.txt", " from me")
// fs.writeFileSync("notes.text", "hello world")
// console.log(validator.isEmail("abcmail.co"));
// console.log(clk.bold.blue("hello world"));
// console.log(process.argv)

const command = process.argv[2];
if (command === "add") {
    console.log("Adding note")
} else if (command === "remove") {
    console.log("removing note")
}