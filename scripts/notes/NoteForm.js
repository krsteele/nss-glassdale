import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // console.log(clickEvent)
        // get input values from form inputs
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const timestamp = clickEvent.timeStamp
        // console.log(timestamp)
        const author = document.querySelector("#note--author").value
        const suspect = document.querySelector("#note--suspect").value
        const note = document.querySelector("#note--note").value

        // make note obj with form values
        const newNoteObj = {
            dateOfInterview,
            timestamp,
            author,
            suspect,
            note
        }

        // save note obj
        saveNote(newNoteObj)
        // clear form inputs

    }

})

const render = () => {
    contentTarget.innerHTML = 
        `
        <input type="date" id="note--dateOfInterview"/>
        <input type="text" id="note--author" placeholder="Your name here..."/>
        <input type="text" id="note--suspect" placeholder="Name of suspect"/>
        <textarea id="note--note" placeholder="Case notes here..."></textarea>
        <button id="saveNote">Save Note</button>
        `
}

export const NoteForm = () => {
    render()
}