import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { criminalHTML } from "./CriminalHTML.js"

const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
    
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()

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
    )
}