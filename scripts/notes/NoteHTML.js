export const NoteHTML = noteObj => {
    return `
    <div class="note__card">
        <div class="note__author">Author: ${noteObj.author}</div>
        <div class="note__suspect">Suspect: ${noteObj.suspect}</div>
        <div class="note__date">Date of Interview: ${noteObj.dateOfInterview}</div>
        <div class="note__timeStamp">Date Entered: ${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</div>
        <div class="note__note">Case note: ${noteObj.note}</div>
    </div>
`
}