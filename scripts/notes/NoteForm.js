const contentTarget = document.querySelector(".noteFormContainer")

const eventHub = document.querySelector(".container")

// eventHub.addEventListener("click", )

const render = () => {
    contentTarget.innerHTML = 
        `
        <input type="date" id="note--dateOfInterrogation"/>
        <input type="text" id="note--author" placeholder="Your name here..."/>
        <input type="text" id="note--suspect" placeholder="Name of suspect"/>
        <textarea id="note--note" placeholder="Case notes here..."></textarea>
        <button id="saveNote">Save Note</button>
        `
}

export const NoteForm = () => {
    render()
}