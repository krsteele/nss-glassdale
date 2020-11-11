export const NoteHTML = (note, criminal) => {
    return `
    <div class="note__card">
        <div class="note__author">Author: ${note.author}</div>
        <div class="note__suspect">Suspect: ${criminal.name}</div>
        <div class="note__date">Date of Interview: ${note.dateOfInterview}</div>
        <div class="note__timeStamp">Date Entered: ${new Date(note.timestamp).toLocaleDateString('en-US')}</div>
        <div class="note__note">Case note: ${note.note}</div>
        <button id="deleteNote--${note.id}">Delete</button>
    </div>
`
}