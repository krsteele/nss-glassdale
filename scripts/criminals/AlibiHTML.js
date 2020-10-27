import { useCriminals } from "./CriminalDataProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("assocBtnClicked", (eventObj)=> {
    console.log(eventObj)
})


const render = (criminalObj) => {
    const contentTarget = document.querySelector(`#criminal-${criminalObj.id}`)

    contentTarget.innerHTML += 
        `<div class="alibi__list">
            ${criminalObj.known_associates.map(alibiObj => {
                return
                    `<p>${alibiObj.name}</p>
                    <p>${alibiObj.alibi}</p>`
            }).join("")}
        </div>`
}