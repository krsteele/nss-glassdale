import { NoteHTML } from "./NoteHTML.js"
import { getNotes, useNotes } from "./NoteDataProvider.js"

const notesContainer = document.querySelector(".notesContainer")

export const NoteList = () => {
    getNotes()
        .then(() => {
            const notesArray = useNotes()
            render(notesArray)
        })
}