//type on chat /tem  "Item Name"
import {con} from './a.js'

const MUM = { module: 'bananas' };

const gmGuard = (command) => {
	const gm = game.user.isGM;
	if (!gm) ui.notifications?.warn(`/${command} requires GM rights.`);
	return gm;
}

// COMMANDS

function has(args) {
	let actors = canvas.tokens.controlled.map((i) => i.actor);
let array = []
let qtd = []
for (const actor of actors) {

	GURPS.recurselist(actor.system.equipment.carried, (e, key, d) => {
		if (e.name.includes(args))
			array.push(`<b style="color: #313347;">${actor.name}</b> <span style= "color: #555555;">tem ${e.count}  ${e.name} <br>`) |
			qtd.push(parseInt(e.count))

	})
}


let output = "";
for (let i = 0; i < array.length; i++) {
	output += array[i] + " ";
}
for (let i = 0; i < array.length; i++) {
}

var sum = 0;

for (var i = 0; i < qtd.length; i++) {
  sum += qtd[i];
}


ChatMessage.create({ content: `
<p style="height: 30px; background-color: #b50427;
                        color: white;
                        text-align: center;
                        vertical-align: middle;
                        line-height: 30px;">

                         O grupo tem ${sum} desse item</p>
                        
                        <p style="
                        height: auto;
                        background-color: #efe7df;
                        margin-top: -4px;
                        padding: 10px;
                        line-height: 20px;"

                        text-align: center;
                        vertical-align: middle;
                        ">
                        ${output}. 
    `})
}
function skill (args) {
	let actors = canvas.tokens.controlled.map((i) => i.actor);
let array = []
let qtd = []

//outrooooo
for (const actor of actors) {

	GURPS.recurselist(actor.system.skills, (e, key, d) => {
		if (e.name.startsWith(args))
						array.push(`<b>${actor.name}</b><br> role: <br> ["${e.name}"SK:${e.name}]<br><br>`) 


	})
}


console.log(array)

let output = "";
for (let i = 0; i < array.length; i++) {
	output += array[i] + " ";
}
for (let i = 0; i < array.length; i++) {
}



ChatMessage.create({ content: `
<p style="height: 30px; background-color: #b50427;
                        color: white;
                        text-align: center;
                        vertical-align: middle;
                        line-height: 30px;">

                         Cala a boca e rola!</p>
                        
                        <p style="
                        height: auto;
                        text-align: center;
                        background-color: #efe7df;
                        margin-top: -4px;
                        padding: 10px;
                        line-height: 20px;"
                        text-align: left;
                        vertical-align: middle;
                        "> ${output}
                         </p>
    `})
}
function dodge () {
	let dodge = `["Dodge" Dodge]`
let dodgeNdrop = `["Dodge and Drop" /r [Dodge +3 Dodge and Drop]\\/st + prone]`
let feverishDodge = `["Feverish Dodge" Dodge +2 Feverish Defense *Cost 1FP]`
let acrobatic = `["Acrobatic Dodge" /if [S:Acrobatics] [Dodge +2] /else [Dodge -2 Falhou no Acrobatic Dodge]]`
let retreat = `["Retreating Dodge"  /r [Dodge +3 Retreating] ]`
ChatMessage.create({ content: `
<div class="title-box">  Choose your Action    </div>
                        
                        <div class="text-box"> 
                         <br>${dodge} <br>
                        <br>${dodgeNdrop} <br>
                        <br> ${feverishDodge} <br>
                        <br> ${acrobatic}<br>
                        <br> ${retreat}<br>
                        <br>
                         </div>
    `})
}

// MAPPING INTERFACE FOR CHAT COMMANDS

const COMMANDS = {

	tem: has,
	skill: skill,
	dodge: dodge,
  teste: con
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