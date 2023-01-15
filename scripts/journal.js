export function journal(args) {
    const j = game.journal.getName(args);
    if (!j) return;

    const allElements = j.pages.filter(e => e);
    let content = "";
    allElements.forEach(element => {
        content += element.text.content + "\n";
    });

    new Dialog({title: "GURPS",
                content: content,
                buttons: {ok: {label: "Close"}}}).render(true, {width: 800});
}