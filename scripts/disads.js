export function ads(args) {
    const folderName = "PC";
const getFolder = game.folders.getName(folderName).content;
let nomes = [];
getFolder.forEach(function (currentObject) {
    nomes.push(currentObject.name);
});

let content = "";
nomes.forEach(function(nome) {
    let ator = game.actors.getName(nome);
    content += "<p style='color: black;  font-size: 18px;font-weight: bolder;'>" + ator.name + "</h2>";
    let quirkList = "";
    let disadList = "";
    Object.keys(ator.system.ads).forEach(function(chave) {
        let valor = ator.system.ads[chave];
        if(valor.hasOwnProperty("contains") && !jQuery.isEmptyObject(valor.contains)) {
            Object.keys(valor.contains).forEach(function(chave) {
                let valorContains = valor.contains[chave];
                if(valorContains.points == -1) {
                    quirkList += "<li style='color:black;'> " + valorContains.name + ": " + valorContains.points + "</li>";
                } else if(valorContains.points < -1) {
                    disadList += "<li style='color:darkred;'> " + valorContains.name + ": " + valorContains.points + "</li>";
                }
            });
        } else if(valor.hasOwnProperty("name") && valor.points == -1 ) {
            quirkList += "<li style='color:black;'>" + valor.name + ": " + valor.points + "</li>";
        } else if (valor.hasOwnProperty("name") && valor.points < -1 ) {
            disadList += "<li style='color:darkred;'>  " + valor.name + ": " + valor.points + "</li>";
        }
    });
    let disads = "<p style='color: darkred; font-size: 13px; font-weight: bolder;'> Disadvantages </p>"
    let quirks = "<p style='color: black; font-size: 13px; font-weight: bolder;'> Quirks </p>"
    content += "<ul>" + disads + disadList + quirks + quirkList + "</ul>"
});

// document.getElementById("result").innerHTML = content;

    new Dialog({title: "GURPS",
                content: content,
                buttons: {ok: {label: "Close"}}}).render(true, {width: 400});
}
