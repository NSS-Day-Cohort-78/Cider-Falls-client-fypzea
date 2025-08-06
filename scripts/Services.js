import { servicesArray } from "./database.js";

const services = servicesArray()

export const servicesList = () => {
    let html = "<h2>Services</h2>"

    let servicesHTML = services.map((service) => {
        return `<li data-id=${service.id} data-name="${service.name}" data-type="service">${service.name}</li>`
    })

    servicesHTML = servicesHTML.join("")
    html += servicesHTML
    return html
}