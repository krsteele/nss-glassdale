import { getOfficers, useOfficers } from "./officers/OfficerProvider.js"
import { getCriminals, useCriminals } from "./criminals/CriminalDataProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"

getOfficers()
    .then(()=> {const officerArray = useOfficers()
    console.log(officerArray)})

CriminalList()