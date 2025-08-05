const database = [
    parkAreas = [
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
    services = [
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
    guests = [
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
    ]
]

export const parkAreasArray = () => {
    return structuredClone(database.parkAreas)
}

export const servicesArray = () => {
    return structuredClone(database.services)
}

export const guestsArray = () => {
    return structuredClone(database.guests)
}