export function has(args){
  let actors = canvas.tokens.controlled.map((i) => i.actor);
  let array = [];
  let qtd = [];
  for (const actor of actors) {
    GURPS.recurselist(actor.system.equipment.carried, (e, key, d) => {
      if (e.name.includes(args))
        array.push(
          `<b style="color: #313347;">${actor.name}</b> <span style= "color: #555555;">has ${e.count}  ${e.name} <br>`
        ) | qtd.push(parseInt(e.count));
    });
  }

  let output = "";
  for (let i = 0; i < array.length; i++) {
    output += array[i] + " ";
  }
  for (let i = 0; i < array.length; i++) {}

  var sum = 0;

  for (var i = 0; i < qtd.length; i++) {
    sum += qtd[i];
  }

  ChatMessage.create({
    content: `
    <div class="title-box">  The party has  ${sum} itens  </div>
    <div class="text-box">  ${output}.   </div>
    `,
  });
}

