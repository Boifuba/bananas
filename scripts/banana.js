function banana() {
  let img = `<br> 
  <div class="text-box">
  <div style="
  border:  15px solid rgba(122, 46, 0, 1);
  border-radius: 100%;
  background-color: rgba(245, 168, 0, 1);
  height: 180px;
  width: 180px;
  display: inline-block;
  margin-bottom: 52px;
  margin-left: 1%;
  margin-right: auto;
  margin-top: 18px;">
 
  <img src="./modules/bananas/media/img/banana.png" style="
  border: none;
  height: 180px;
  width: 180px;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  ">  
  </div>
  
  
  <p id="gga-chat-message">
  <br>
  <div class="title-box">
  <b>Commands:
  </div>
  </b> <br><br>
  <b>/has</b>: |Item Name| <em>Shows players who have this item in their inventory and print them to chat</em><br><br>
  <b>/skill</b>: |Skill Name| <em>Shows players who have this skills in their character sheet and print them to chat</em><br><br>
  <b>/dodge</b>: <em> This command will print on chat some possibilities for dodge as otF form</em><br><br>
  <b>/banana</b>: <em> Print a banana on chat to help you?</em><br><br>
  <b>/showimage</b>: <em> Browse an image on your files and show to all players!</em><br><br>
  <b>/game</b>: |Rock|Paper|Scissors| <em> Play a Jokenpô game if campaign is boring.</em><br><br>
  <b>/journal</b>: |Journal Name| <em> Show a Journal content as dialog. <b>DO NOT OPEN JOURNALS CONTAINING PDFS</b></em><br><br>
  <b>/odds</b>: |number between 0-100| <em> Enter a chance of successfully doing or finding something. </b></em><br><br>
  <b>/lights</b>: |on| |off| <em> Toggle all lights in the scene on or off</b></em><br><br>
  <b>/adds</b>:  <em>Show a dialog with all disads and quirks from all player inside a folder named as PC</b></em><br><br>
  <b>/setsize</b>: |size| <em>Change the size of the selected tokens</b></em><br><br>

  
  <div>

  </p>
  
  `;
  ChatMessage.create({
    content: img,
    whisper: ChatMessage.getWhisperRecipients("GM"),
    sound: "./modules/bananas/media/sounds/banana.mp3",
    
  });
}

export { banana };
