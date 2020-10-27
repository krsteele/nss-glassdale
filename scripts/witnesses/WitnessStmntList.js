import { getWitnesses, useWitnessStatements } from "./WitnessStmntProvider.js"
import { witnessHTML } from "./WitnessStmnt.js"

const eventHub = document.querySelector(".container")

const witnessContainer = document.querySelector(".caseDataContainer")


eventHub.addEventListener("witnessesClicked", () => {
    WitnessList()
})

const WitnessList = () => {
    
    getWitnesses()
        .then(() => {
            const witnessArray = useWitnessStatements()
            render (witnessArray)
            
        }
    )
}

const render = (witnessArray) => {
    let witnessHTMLRepresentations = ""
            for (const witness of witnessArray) {

                witnessHTMLRepresentations += witnessHTML(witness)

                witnessContainer.innerHTML = `
                    <h3>Witness Statements</h3>
                    <section class="witnessList">
                        ${witnessHTMLRepresentations}
                    </section>
                `
            }
}