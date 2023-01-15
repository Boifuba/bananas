function banana() {
  let img = `<br> 
  
  <div style="
  border:  15px solid rgba(122, 46, 0, 1);
  border-radius: 100%;
  background-color: rgba(245, 168, 0, 1);
  height: 180px;
  width: 180px;
  display: inline-block;
  margin-bottom: 52px;
  margin-left: auto;
  margin-right: auto;">

  
  <img src="/modules/bananas/img/banana.png" style="
  border: none;
  height: 130px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;">  
  </div>
  
  <div class="text-box">
  <p id="gga-chat-message">
  <br>
  <b>Commands:</b> <br><br>
  <b>/has</b>: |Item Name| <em>Shows players who have this item in their inventory and print them to chat</em><br><br>
  <b>/skill</b>: |Skill Name| <em>Shows players who have this skills in their character sheet and print them to chat</em><br><br>
  <b>/dodge</b>: <em>This command will print on chat some possibilities for dodge as otF form</em><br><br>
  <b>/banana</b>: <em>Print a banana on chat, why?</em><br><br>
  <b>/bhelp</b>: <em>Print this help on chat.</em><br><br>
  <div>

  
  
  `;
  ChatMessage.create({
    content: img,
    whisper: ChatMessage.getWhisperRecipients("GM"),
  });
}

export { banana };
