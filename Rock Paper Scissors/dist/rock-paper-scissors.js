"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let wins = 0;
let losses = 0;
let draws = 0;
let player_score = 0;
let cpu_score = 0;
let round = 1;
const choice = ["", "Rock", "Paper", "Scissors"];
function game() {
    const cpuChoice = Math.floor(Math.random() * 3) + 1;
    rl.question(`\n====================Round ${round}:====================\n1. Rock\n2. Paper\n3. Scissors `, (answer) => {
        const playerChoice = parseInt(answer);
        console.log(`You chose: ${choice[playerChoice]}`);
        console.log(`CPU chose: ${choice[cpuChoice]}`);
        if (playerChoice != 1 && playerChoice != 2 && playerChoice != 3) {
            console.log("Invalid option. Please try again:");
            game();
            return;
        }
        if (playerChoice == cpuChoice) {
            console.log("\nDraw!");
            draws++;
        }
        else if ((playerChoice == 1 && cpuChoice == 3) ||
            (playerChoice == 2 && cpuChoice == 1) ||
            (playerChoice == 3 && cpuChoice == 2)) {
            console.log("\nYou win!");
            player_score++;
            wins++;
        }
        else {
            console.log("\nCPU wins!");
            cpu_score++;
            losses++;
        }
        round++;
        if (player_score == 3) {
            console.log("Player wins the game!");
            console.log("Returning to menu...\n");
            menu();
        }
        if (cpu_score == 3) {
            console.log("CPU wins the game!");
            console.log("Returning to menu...\n");
            menu();
        }
        else {
            game();
        }
    });
}
function stats() {
    console.log(`\nWins: ${wins}`);
    console.log(`Losses: ${losses}`);
    console.log(`Draws: ${draws}\n`);
    rl.question("Return to menu? (y/n)\n", (answer) => {
        if (answer == "y") {
            menu();
        }
        else {
            stats();
        }
    });
}
function menu() {
    rl.question("\nRock, Paper, Scissors\n=====================\n1. Play\n2. Stats\n3. Exit\n\nPlease select an option: \n", (answer) => {
        switch (answer) {
            case "1":
                player_score = 0;
                cpu_score = 0;
                round = 1;
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