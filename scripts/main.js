// import { getOfficers, useOfficers } from "./officers/OfficerDataProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getNotes } from "./notes/NoteDataProvider.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NoteList } from "./notes/NoteList.js"
import { OfficerList } from "./officers/OfficerList.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { renderWitnessesButton } from "./witnesses/WitnessStmntButton.js"
// import { getConvictions } from "./convictions/ConvictionDataProvider.js"
// import the module for adding a list of alibis to a criminal card
import "./criminals/AlibiHTML.js"
import "./witnesses/WitnessStmntList.js"
import { getCriminals } from "./criminals/CriminalDataProvider.js"
import { renderFacilitiesButton } from "./facility/DisplayFacilitiesButton.js"
import "./facility/FacilityList.js"
import { renderCriminalsButton } from "./criminals/DisplayCriminalsButton.js"

OfficerList()

CriminalList()

ConvictionSelect()

OfficerSelect()

NoteForm()

getNotes()
    .then(getCriminals)
    .then(NoteList)

renderWitnessesButton()
renderFacilitiesButton()
renderCriminalsButton()

// getConvictions() 
// getNotes()  