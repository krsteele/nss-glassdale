import { getOfficers, useOfficers } from "./OfficerDataProvider.js"
import { OfficerHTML } from "./OfficerHTML.js"

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers()

            let officerHTMLRepresentations = ""

            for (const officer of officerArray) {
                officerHTMLRepresentations += OfficerHTML(officer)

                officersContainer.innerHTML = `
                <h3>Glassdale Police Officers</h3>
                <section class="officersList">
                    ${officerHTMLRepresentations}
                </section>
                `
            }
        }
    )
}