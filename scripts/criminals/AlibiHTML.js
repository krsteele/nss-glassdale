import { useCriminals } from "./CriminalDataProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("assocBtnClicked", (eventObj)=> {
    // console.log(eventObj)
    const criminalArray = useCriminals()
    // console.log(criminalArray)

    const foundCriminal = criminalArray.find((criminalObj) => {
        return criminalObj.id === parseInt(eventObj.detail.criminalId)
    })
    // console.log(foundCriminal.id)
    // console.log(foundCriminal.known_associates)
    addAlibiList(foundCriminal)

})

const addAlibiList = (criminalObj) => {
    // console.log(criminalObj)
    render(criminalObj)
}


const render = (criminalObj) => {
    const contentTarget = document.querySelector(`#criminal-${criminalObj.id}`)
    // console.log(contentTarget)
    contentTarget.innerHTML += 
        `<div class="alibi__list">
            ${criminalObj.known_associates.map(alibiObj => {
                return `
                    <p>${alibiObj.name}</p>
                    <p>${alibiObj.alibi}</p>`
            }).join("")}
        </div>`
}