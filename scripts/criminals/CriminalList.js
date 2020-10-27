import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { criminalHTML } from "./CriminalHTML.js"
import { useConvictions } from "../convictions/ConvictionDataProvider.js"
import { getOfficers } from "../officers/OfficerDataProvider.js"


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
      console.log("filteredCriminalsArray", filteredCriminalsArray)
  
      /*
        Then invoke render() and pass the filtered collection as
        an argument
      */
      render(filteredCriminalsArray)
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

        render(filteredCriminalsArray)
    }
})

// define target container for HTML
const criminalsContainer = document.querySelector(".caseDataContainer")

export const CriminalList = () => {
    
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            render (criminalArray)
            
        }
    )
}

const render = (criminalArray) => {
    let criminalHTMLRepresentations = ""
            for (const criminal of criminalArray) {

                criminalHTMLRepresentations += criminalHTML(criminal)

                criminalsContainer.innerHTML = `
                    <h3>Glassdale Criminals</h3>
                    <section class="criminalsList">
                        ${criminalHTMLRepresentations}
                    </section>
                `
            }
}