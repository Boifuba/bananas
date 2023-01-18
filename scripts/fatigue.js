
export async function fatigue(args) {
    args = args || 1;
  if (canvas.tokens.controlled.length === 0)
    return ui.notifications.error("Select the tokens");

  let array = [];
  let actors = canvas.tokens.controlled.map((i) => i.actor);
  if (!actors.length)
    actors = game.users
      .filter((i) => i.active && !!i.character)
      .map((i) => i.character);
  for (const actor of actors) {
    const encumbrance = actor.system.encumbrance;
    const FP = actor.system.FP;
    const current = Object.values(encumbrance).find((i) => i.current);
    const key = current.key;
    const value = actor.system.FP.value;
    if (key === "enc0")
      await actor.update({ "data.FP.value": value - args * 1 });
    else if (key === "enc1")
      await actor.update({ "data.FP.value": value - args * 2 });
    else if (key === "enc2")
      await actor.update({ "data.FP.value": value - args * 3 });
    else if (key === "enc3")
      await actor.update({ "data.FP.value": value - args * 4 });
    else if (key === "enc4")
      await actor.update({ "data.FP.value": value - args * 5 });

    array.push(`<p>${actor.name} now have <b>${FP.value} FP</b></p>`);
  }

  let output = "";
  for (let i = 0; i < array.length; i++) {
    output += array[i] + " ";
  }
  for (let i = 0; i < array.length; i++) {}

  ChatMessage.create({
    content: ` <div class="title-box">  You walked ${args} hours </div>
                            
  <div class="text-box"> 
   <br>${output} <br>`,
  });
}
