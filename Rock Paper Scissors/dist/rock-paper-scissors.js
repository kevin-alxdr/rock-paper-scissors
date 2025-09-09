"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let wins = 0;
let losses = 0;
let draws = 0;
function game() {
    menu();
}
function stats() {
    menu();
}
function menu() {
    rl.question("Rock, Paper, Scissors\n=====================\n1. Play\n2. Stats\n3. Exit\nPlease select an option: ", (answer) => {
        switch (answer) {
            case "1":
                game();
                break;
            case "2":
                stats();
                break;
            case "3":
                console.log("Exiting game...");
                rl.close();
                break;
            default:
                console.log("Invalid option. Please try again.");
                menu();
        }
    });
}
menu();
//# sourceMappingURL=rock-paper-scissors.js.map