import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { criminalHTML } from "./CriminalHTML.js"
import { useConvictions } from "../convictions/ConvictionDataProvider.js"
import { getOfficers } from "../officers/OfficerDataProvider.js"
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js"

let criminalArray = []
let facilityArray = []
let criminalFacilitiesArray = []

// define the event hub
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeSelected", event => {
    // debugger
    // console.log("crimeSelected event happened", event.detail.crimeThatWasChosen)
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== 0) {
      //Get the list of criminals
      const criminalsArray = useCriminals()
      // console.log("array of criminals", criminalsArray)
     // We have the the id of the conviction that the user selected from the drop down. But each criminal object has the name of the crime they were convicted for. So we need to get the name of the conviction associated with the unique identifier. 
      // Get the array of convictions
      const convictionsArray = useConvictions()
      // console.log("array of convictions", convictionsArray)
      // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
      const convictionThatWasChosen = convictionsArray.find(convictionObj => {
        // debugger
        return convictionObj.id === event.detail.crimeThatWasChosen
      })
    //   console.log("convictionThatWasChosen", convictionThatWasChosen)
      /*
        Now that we have the name of the chosen crime, filter the criminals application state down to the people that committed the crime
      */
      const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
        return criminalObj.conviction === convictionThatWasChosen.name
      })
      // console.log("filteredCriminalsArray", filteredCriminalsArray)
      // reassign the value of the criminalArray variable with the filtered info
      criminalArray = filteredCriminalsArray
      /*
        Then invoke render() and pass the filtered collection as
        an argument
      */
      render()
    }
  })

//   ARRESTING OFFICER EVENT LISTENER AND FILTER
eventHub.addEventListener("officerSelected", event => {
    // console.log(event)
    if (event.detail.officer !== 0) {
        const criminalsArray = useCriminals()
        // const officersArray = getOfficers()
        // console.log("Arresting Officer Event Listener Criminal Array:", criminalsArray)

        const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
            return criminalObj.arrestingOfficer === event.detail.officer
        })
        // console.log("filtered criminals by arresting officer:", filteredCriminalsArray)
        criminalArray = filteredCriminalsArray
        render()
    }
})

// define target container for HTML
const criminalsContainer = document.querySelector(".caseDataContainer")


export const CriminalList = () => {
    // retrieve and store information on facilities, criminals, and facilities each criminal spent time in
    getCriminals()
    .then(getFacilities())
    .then(getCriminalFacilities())
        .then(() => {
            criminalArray = useCriminals()
            facilityArray = useFacilities()
            criminalFacilitiesArray = useCriminalFacilities()
            // use stored data as arguments in render function
            render()
            
        }
    )
}
// 
const render = () => {
  // iterate all criminals
  const criminalHTMLRepresentations = criminalArray.map(criminalObj => {
    // filter all relationships to get only ones for this criminal
    const facilityRelationshipsForThisCriminal = criminalFacilitiesArray.filter(crimFac => crimFac.criminalId === criminalObj.id)

    // use the relationship to find the matching facilities
    const relatedFacilities = facilityRelationshipsForThisCriminal.map(crimFac => {
      const matchingFacilityObj = facilityArray.find(facility => facility.id === crimFac.facilityId)
      return matchingFacilityObj
    })
    return criminalHTML(criminalObj, relatedFacilities)
  }
  ).join("")

  criminalsContainer.innerHTML = `
        <h3>Glassdale Criminals</h3>   
        <section class="criminalsList">
             ${criminalHTMLRepresentations}
        </section>`
}
// let criminalHTMLRepresentations = ""
//         for (const criminal of criminalArray) {

//             criminalHTMLRepresentations += criminalHTML(criminal)

//             criminalsContainer.innerHTML = `
//                 <h3>Glassdale Criminals</h3>
//                 <section class="criminalsList">
//                     ${criminalHTMLRepresentations}
//                 </section>
//             `
//         }