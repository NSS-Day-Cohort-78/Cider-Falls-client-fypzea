import { guestsArray } from './database.js'

export const guestList = () => {
   const guests = guestsArray() 
   let guestsHTML = "<ol>"
   
   for (const guest of guests) {
        guestsHTML += `<li data-id="${guest.id}">
                        ${guest.name}
                        </li>`
    }
    guestsHTML +="</ol>"
   
   
   
   "</ol>"

}