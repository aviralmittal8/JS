// Initial scores
let userscore = 0;
let compscore = 0;

// Get all choice elements (rock, paper, scissor)
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user = document.querySelector("#userscore");
let comp = document.querySelector("#compscore");

// Function to handle a draw condition
const drawgame = () => {
    // console.log("Game was draw");
    msg.innerText = "This move is a draw";
    msg.style.backgroundColor = "yellow";
};

// Function to generate random choice for computer
const gencompchoice = () => {
    let options = ["rock", "paper", "scissor"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
};

// Function to update the result message and score after a round
const showwinner = (userwin, compchoice) => {
    if (userwin) {
        userscore += 1;
        msg.innerText = `You Win !! computer's choice was ${compchoice}`;
        msg.style.backgroundColor = "green";
        user.innerText = userscore;
    } else {
        compscore += 1;
        msg.innerText = `Computer Wins !! computer's choice was ${compchoice}`;
        msg.style.backgroundColor = "red";
        comp.innerText = compscore;
    }
};

// Main function to play one round of the game
const playgame = (userchoice) => {
    // console.log(`User choice was ${userchoice}`);
    const compchoice = gencompchoice();
    // console.log(`Computer choice was ${compchoice}`);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }

        showwinner(userwin,compchoice);
    }
};

// Loop through all choice elements and add a click listener
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
