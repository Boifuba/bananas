
function dodge () {
	let dodge = `["Dodge" Dodge]`
let dodgeNdrop = `["Dodge and Drop" /r [Dodge+3 Dodge and Drop]\\/r [Dodge]\\/st + prone]`
let feverishDodge = `["Feverish Dodge" /r [Dodge+2 Feverish Defense *Cost 1FP]]`
let acrobatic = `["Acrobatic Dodge" /if [S:Acrobatics] {/r [Dodge+2 Acobatic Dodge]} {/r [Dodge-2 Falhou no Acrobatic Dodge]}]`
let retreat = `["Retreating Dodge"  /r [Dodge+3 Retreating] ]`
ChatMessage.create({ content: `
<div class="title-box">  Dodge Options   </div>
                        
                        <div class="text-box"> 
                         <br>${dodge} <br>
                        <br style="class:ban">${dodgeNdrop} <br>
                        <br> ${feverishDodge} <br>
                        <br> ${acrobatic}<br>
                        <br> ${retreat}<br>
                        <br>
                         </div>
    `})
}
export { dodge };

