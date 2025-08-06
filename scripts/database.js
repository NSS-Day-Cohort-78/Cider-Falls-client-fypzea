const database = {
    parkAreas: [
        {
            id: 1,
            name: "Chamfort River"
        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail"
        },
        {
            id: 3,
            name: "Lodge"
        },
        {
            id: 4,
            name: "Hotel"
        },
        {
            id: 5,
            name: "Restaurant"
        },
        {
            id: 6,
            name: "Gander River"
        },
        {
            id: 7,
            name: "Campgrounds"
        },
        {
            id: 8,
            name: "Office Park"
        },
        {
            id: 9,
            name: "Children Play Areas"
        },
        {
            id: 10,
            name: "Pine Bluff Beginner Trail"
        },
        {
            id: 11,
            name: "Pine Bluff Intermediate Trail"
        },
        {
            id: 12,
            name: "Pine Bluff Advanced Trail"
        },
    ],
    services: [
        {
            id: 1,
            name: "rafting"
        },
        {
            id: 2,
            name: "canoeing"
        },
        {
            id: 3,
            name: "fishing"
        },
        {
            id: 4,
            name: "hiking"
        },
        {
            id: 5,
            name: "picnicking"
        },
        {
            id: 6,
            name: "rock climbing"
        },
        {
            id: 7,
            name: "lodging"
        },
        {
            id: 8,
            name: "parking"
        },
        {
            id: 9,
            name: "information"
        },
        {
            id: 10,
            name: "zip line"
        },
        {
            id: 11,
            name: "food vendors"
        }
    ],
    guests: [
    { 
        id: 1, 
        name: "Emma Thompson",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 2, 
        name: "James Rodriguez",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 3, 
        name: "Sophia Chen",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 4, 
        name: "Michael Johnson",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 5, 
        name: "Isabella Garcia",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 6, 
        name: "David Kim",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 7, 
        name: "Olivia Martinez",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 8, 
        name: "Alexander Brown",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 9, 
        name: "Ava Williams",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 10, 
        name: "Noah Davis",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 11, 
        name: "Mia Anderson",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 12, 
        name: "Ethan Wilson",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 13, 
        name: "Charlotte Miller",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 14, 
        name: "Lucas Taylor",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 15, 
        name: "Amelia White",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 16, 
        name: "Benjamin Harris",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 17, 
        name: "Harper Clark",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 18, 
        name: "William Lewis",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    {  
        id: 19, 
        name: "Evelyn Walker",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 20, 
        name: "Henry Young",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 21, 
        name: "Grace Thompson",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 22, 
        name: "Samuel Martinez",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 23, 
        name: "Zoe Anderson",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 24, 
        name: "Jackson Lee",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 25, 
        name: "Lily Rodriguez",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 26, 
        name: "Owen Mitchell",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 27, 
        name: "Chloe Wilson",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 28, 
        name: "Carter Johnson",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 29, 
        name: "Madison Brown",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 30, 
        name: "Logan Garcia",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 31, 
        name: "Ella Davis",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 32, 
        name: "Sebastian Chen",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 33, 
        name: "Aria Williams",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 34, 
        name: "Mason Taylor",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 35, 
        name: "Scarlett Miller",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 36, 
        name: "Julian White",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 37, 
        name: "Luna Harris",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 38, 
        name: "Grayson Clark",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 39, 
        name: "Victoria Lewis",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 40, 
        name: "Wyatt Walker",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 41, 
        name: "Penelope Young",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 42, 
        name: "Leo Thompson",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 43, 
        name: "Hazel Martinez",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 44, 
        name: "Caleb Anderson",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 45, 
        name: "Nova Lee",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 46, 
        name: "Asher Rodriguez",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 47, 
        name: "Violet Mitchell",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 48, 
        name: "Ezra Wilson",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 49, 
        name: "Ivy Johnson",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    },
    { 
        id: 50, 
        name: "Theo Brown",
        parkAreaId: Math.floor(Math.random() * 12) + 1
    }
    ],
    parkAreaServices: [
        {   id: 1,
            parkAreaId: 1,
            serviceId: 1,
        },
        {   id: 2,
            parkAreaId: 1,
            serviceId: 2,
        },
        {   id: 3,
            parkAreaId: 1,
            serviceId: 3,
        },
        {   id: 4,
            parkAreaId: 2,
            serviceId: 4,
        },
        {   id: 5,
            parkAreaId: 2,
            serviceId: 5,
        },
        {   id: 6,
            parkAreaId: 2,
            serviceId: 6,
        },
        {   id: 6,
            parkAreaId: 3,
            serviceId: 7,
        },
        {   id: 7,
            parkAreaId: 3,
            serviceId: 8,
        },
        {   id: 8,
            parkAreaId: 3,
            serviceId: 9,
        },
        {   id: 9,
            parkAreaId: 3,
            serviceId: 5,
        },
        {   id: 10,
            parkAreaId: 4,
            serviceId: 7,
        },
        {   id: 11,
            parkAreaId: 4,
            serviceId: 8,
        },
        {   id: 12,
            parkAreaId: 4,
            serviceId: 9,
        },
        {   id: 13,
            parkAreaId: 4,
            serviceId: 5,
        },
        {   id: 14,
            parkAreaId: 5,
            serviceId: 7,
        },
        {   id: 15,
            parkAreaId: 5,
            serviceId: 8,
        },
        {   id: 16,
            parkAreaId: 5,
            serviceId: 9,
        },
        {   id: 17,
            parkAreaId: 5,
            serviceId: 5,
        },
        {   id: 18,
            parkAreaId: 6,
            serviceId: 3,
        },
        {   id: 19,
            parkAreaId: 6,
            serviceId: 4,
        },
        {   id: 20,
            parkAreaId: 7,
            serviceId: 9,
        },
        {   id: 21,
            parkAreaId: 7,
            serviceId: 7,
        },
        {   id: 22,
            parkAreaId: 7,
            serviceId: 8,
        },
        {   id: 23,
            parkAreaId: 8,
            serviceId: 9,
        },
        {   id: 24,
            parkAreaId: 8,
            serviceId: 7,
        },
        {   id: 25,
            parkAreaId: 8,
            serviceId: 8,
        },
        {   id: 26,
            parkAreaId: 9,
            serviceId: 9,
        },
        {   id: 27,
            parkAreaId: 9,
            serviceId: 7,
        },
        {   id: 28,
            parkAreaId: 9,
            serviceId: 8,
        },
        {   id: 29,
            parkAreaId: 10,
            serviceId: 4,
        },
        {   id: 30,
            parkAreaId: 10,
            serviceId: 5,
        },
        {   id: 31,
            parkAreaId: 10,
            serviceId: 10,
        },
        {   id: 32,
            parkAreaId: 10,
            serviceId: 11,
        },
        {   id: 33,
            parkAreaId: 11,
            serviceId: 4,
        },
        {   id: 34,
            parkAreaId: 11,
            serviceId: 5,
        },
        {   id: 35,
            parkAreaId: 11,
            serviceId: 10,
        },
        {   id: 36,
            parkAreaId: 12,
            serviceId: 4,
        },
        {   id: 37,
            parkAreaId: 12,
            serviceId: 5,
        },
        {   id: 38,
            parkAreaId: 12,
            serviceId: 10,
        },
    ]
}

export const parkAreasArray = () => {
    return structuredClone(database.parkAreas)
}

export const servicesArray = () => {
    return structuredClone(database.services)
}

export const guestsArray = () => {
    return structuredClone(database.guests)
}

export const parkAreaServicesArray = () => {
    return structuredClone(database.parkAreaServices)
}