
import { banana } from './banana.js'
import { dodge } from './dodge.js'
import { has } from './has.js'
import { showimage } from './showimage.js';
import { skill } from './skill.js'


const MUM = { module: 'bananas' };

const gmGuard = (command) => {
	const gm = game.user.isGM;
	if (!gm) ui.notifications?.warn(`/${command} requires GM rights.`);
	return gm;
}

// COMMANDS


// MAPPING INTERFACE FOR CHAT COMMANDS

const COMMANDS = {

	
	// skill: skill,
	dodge: dodge,
  banana: banana,
  has: has,
  skill: skill,
  showimage: showimage,
  
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