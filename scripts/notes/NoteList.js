import { NoteHTML } from "./NoteHTML.js"
import { getNotes, useNotes } from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")

const notesContainer = document.querySelector(".notesContainer")

export const NoteList = () => {
    getNotes()
        .then(() => {
            const notesArray = useNotes()
            render(notesArray)
        })
}

const render = (array) => {
    let notesHTMLReps = ""
    for (const obj of array) {
        notesHTMLReps += NoteHTML(obj)

        notesContainer.innerHTML = `
            <h3>Case Notes</h3>
            <section class="notesList">
            ${notesHTMLReps}
            </section>
        `
    }
}