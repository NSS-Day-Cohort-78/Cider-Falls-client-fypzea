import { servicesArray } from "./database.js";

export const servicesList = () => {
    const services = servicesArray()
    let html = "<h2>Services</h2>"

    let servicesHTML = services.map((service) => {
        return `<li data-id=${service.id}>${service.name}</li>`
    })

    servicesHTML = servicesHTML.join("")
    html += servicesHTML
    return html
}