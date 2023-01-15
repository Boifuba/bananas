export async function showimage() {

await new FilePicker({type: "image", path: "worlds/", callback: picked}).render(true);

async function picked(image) {
 const ip = new ImagePopout(image, {title: "GURPS",});
 ip.render(true);
 ip.shareImage();
}
}