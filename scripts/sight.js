// export async function sight(args) {
//   const token = canvas.tokens.controlled[0];
//   if(!args) args = 275
//   await token.document.update({
//     sightAngle: token.document.sight.angle === 360 ? args : 360,
//   });
// }



export async function sight(){
    const tokens = canvas.tokens.controlled;

    const updates = tokens.map(t => ({_id: t.id, "sightAngle": t.document.sight.angle === 360 ? 300 : 360}));
    return await canvas.scene.updateEmbeddedDocuments('Token', updates)
  }

//   export async function setsize(args){
//     const tokens = canvas.tokens.controlled;
//     const updates = tokens.map(t => ({_id: t.id, "texture.scaleX": args, "texture.scaleY": args}));
//     return canvas?.scene.updateEmbeddedDocuments("Token", updates);
//   }

