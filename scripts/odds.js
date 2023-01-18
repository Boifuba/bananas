
  export function odds(args){

      let randomNumber = Math.floor(Math.random() * 101);
    
      if (args >= randomNumber) {
        ChatMessage.create({
          content: `<img src="./modules/bananas/media/img/success.webp" style="border: none; ">`,
          speaker: { alias: "Yes! We Have Bananas" },
        });
        
      } else {
  
        ChatMessage.create({
          content: `<img src="./modules/bananas/media/img/failure.webp" style="border: none;">`,
          speaker: { alias: `Yes! We Have No Bananas` },
        });
      }
    }
  
  