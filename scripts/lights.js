export function lights(args){
    if (args === "on") {
      canvas.lighting.updateAll({hidden: false});
    }
    else if (args === "off") {
      canvas.lighting.updateAll({hidden: true});
    }
  }
  
  