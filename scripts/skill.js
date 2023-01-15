export function skill(args) {
  let actors = canvas.tokens.controlled.map((i) => i.actor);
  let array = [];
  let qtd = [];

  //outrooooo
  for (const actor of actors) {
    GURPS.recurselist(actor.system.skills, (e, key, d) => {
      if (e.name.startsWith(args))
        array.push(
          `<b>${actor.name}</b><br> role: <br> ["${e.name}"SK:${e.name}]<br><br>`
        );
    });
  }

  console.log(array);

  let output = "";
  for (let i = 0; i < array.length; i++) {
    output += array[i] + " ";
  }
  for (let i = 0; i < array.length; i++) {}

  ChatMessage.create({
    content: `
    <div class="title-box">  Roll Please   </div>
    <div class="text-box">  ${output}  </div>
    `,
  });
}
