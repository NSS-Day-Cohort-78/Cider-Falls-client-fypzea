import { guestsArray } from './database.js'

export const guestList = () => {
   const guests = guestsArray() 
   let guestsHTML = `<div id="guestbody"><h2>Guests</h2>`
   
   for (const guest of guests) {
        guestsHTML += `<p data-id="${guest.id}">
                        ${guest.name}
                        </p>`
    }
    guestsHTML +="</div>"
    return guestsHTML

}