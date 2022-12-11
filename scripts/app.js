const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1;

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();
});

const render = () => {
    puzzleEl.innerHTML = "";
    guessesEl.textContent = game1.statusMessage;

    game1.puzzle.split("").forEach((letter) => {
        const letterEl = document.createElement("span");
        letterEl.innerText = letter;
        puzzleEl.appendChild(letterEl);
    });
};

const startGame = async () => {
    const puzzle = await getPuzzle("2");
    game1 = new Hangman(puzzle, 5);
    render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// getPuzzle("2")
//     .then((puzzle) => {
//         console.log(puzzle);
//     })
//     .catch((err) => {
//         console.log(`Error: ${err}`);
//     });

// getCountry("US")
//     .then((country) => {
//         console.log(country.name);
//     })
//     .catch((err) => {
//         console.log(`Error: ${err}`);
//     });

// getLocation()
//     .then((data) => {
//         console.log(`City: ${data.city}`);
//         console.log(`Region: ${data.region}`);
//         console.log(`Country: ${data.country}`);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// getCurrentCountry()
//     .then((country) => {
//         console.log(country.name);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// getLocation()
//     .then((location) => {
//         return getCountry(location.country);
//     })
//     .then((country) => {
//         console.log(country.name);
//     });
