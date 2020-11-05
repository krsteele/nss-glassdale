import { NoteHTML } from "./NoteHTML.js"
import { getNotes, useNotes } from "./NoteDataProvider.js"
import { useCriminals } from "../criminals/CriminalDataProvider.js"

const eventHub = document.querySelector(".container")
const notesContainer = document.querySelector(".notesContainer")

eventHub.addEventListener("noteStateChanged", () => {
    // console.log("I heard that the note state changed");
    NoteList()
})


export const NoteList = () => {
        const notes = useNotes()
        const criminals = useCriminals()
        // console.log("notes array from NoteList:", notes);
        // console.log("criminals array from NoteList:", criminals);


        const arrayOfNoteRepresentations = notes.map(note => {
            // console.log("current note being searched:", note, note.criminalId);
            const criminal = criminals.find(criminal => criminal.id === parseInt(note.criminalId))

            const html = NoteHTML(note, criminal)
            return html
        })
        const stringOfAllNoteRepresentations = arrayOfNoteRepresentations.join("")
            render(stringOfAllNoteRepresentations)
        }

const render = (stringOfNoteHTML) => {
        notesContainer.innerHTML = `
            <h3>Case Notes</h3>
            <section class="notesList">
            ${stringOfNoteHTML}
            </section>
        `
    }
