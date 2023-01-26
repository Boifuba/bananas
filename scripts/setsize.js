export async function setsize(args){
    const tokens = canvas.tokens.controlled;
    const updates = tokens.map(t => ({_id: t.id, "texture.scaleX": args, "texture.scaleY": args}));
    return canvas?.scene.updateEmbeddedDocuments("Token", updates);
  }

