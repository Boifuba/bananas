export function journal(args) {
    const j = game.journal.getName(args);
    if (!j) return;
    let jContent = j.data.content;
    new Dialog({title: "GURPS",
                content: j.pages.find(e => e).text.content,
                buttons: {ok: {label: "Close"}}}).render(true, {width: 620});
}