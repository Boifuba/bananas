
import { banana } from './banana.js'
import { dodge } from './dodge.js'
import { has } from './has.js'
import { showimage } from './showimage.js';
import { skill } from './skill.js'
import { journal } from './journal.js'


const MUM = { module: 'bananas' };

const gmGuard = (command) => {
	const gm = game.user.isGM;
	if (!gm) ui.notifications?.warn(`/${command} requires GM rights.`);
	return gm;
}

// JOKENPO// Function to get the computer's choice
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round
function playRound(a, b) {
    a = a.toLowerCase();

    if (a == b) {
        return ChatMessage.create({ content: `<div class="title-box">It's a tie!</div>` });

    } else if (a == 'rock') {
        if (b == 'scissors') {
            return ChatMessage.create({ content: `<div class="title-box">You Win! Rock beats Scissors</div>` });
        } else {
            return ChatMessage.create({ content: `<div class="title-box">You Lose! Paper beats Rock</div>` });
                   }
    } else if (a == 'paper') {
        if (b == 'rock') {
            return ChatMessage.create({ content: `<div class="title-box">You Win! Paper beats Rock</div>` });
        } else {
            return ChatMessage.create({ content: `<div class="title-box">You Lose! Scissors beats Paper</div>` });

        }
    } else if (a == 'scissors') {
        if (b == 'paper') {
            return ChatMessage.create({ content: `<div class="title-box">You Win! Scissors beats Paper</div>` });          
        } else {
            return ChatMessage.create({ content: `<div class="title-box">You Lose! Rock beats Scissors</div>` });
        }
    } else {
        return "Invalid selection. Please try again.";
    }
}

// Function to play the game
async function game(a) {
    let b = computerPlay();
    console.log(playRound(a, b));
}

// Start the game
game();


// MAPPING INTERFACE FOR CHAT COMMANDS

const COMMANDS = {
  dodge: dodge,
  banana: banana,
  has: has,
  skill: skill,
  showimage: showimage,
  game: game,
  journal: journal
};

// HOOK IT IN (I DON'T KNOW WHERE! )
/**
 * @param {ChatLog} log
 * @param {String} data
 */
function bananas(log, data, chatData) {
	if (data[0] !== '/') return;

	const re = /^\/(?<exec>\w+)\b\s*(?<args>.*)?$/.exec(data);
	// console.log(data, re);
	if (!re) return;

	const command = re.groups?.exec,
		args = re.groups?.args;

	const mum = COMMANDS[command];
	if (!mum) return;

	try {
		mum(args?.trim(), chatData);
		return false;
	}
	catch (error) {
		console.error({ command, args }, error);
	}
}
Hooks.on('chatMessage', bananas);
// Register API
Hooks.once('init', () => game.modules.get(MUM.module).api = { commands: COMMANDS });